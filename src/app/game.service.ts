import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { AngularFirestore } from 'angularfire2/firestore';
import * as _ from "lodash";

import { UserService } from './user.service';

@Injectable()
export class GameService {
  public itemsCollection;
  items: Observable<any[]>;
  private currentGameItem = null;
  currentItem: BehaviorSubject<any> = new BehaviorSubject(0);

  constructor(
    private db: AngularFirestore,
    private us: UserService,
  ) {
    this.itemsCollection = db.collection<any>('games');
    this.items = this.itemsCollection.valueChanges();
  }

  getCurrentRoom() : Observable<any> {
    return Observable.of(this.currentGameItem);
  }

  exitRoom() {
    this.currentGameItem = null;
    this.currentItem.next(null);
  }
  getRooms() {
    return this.items;
  }

  private updateGame() {
    this.itemsCollection.doc(this.currentGameItem.id).update(this.currentGameItem, {merge: true});
  }

  updateGameItem(obj) {
    this.currentGameItem = obj;
    this.updateGame();
  }

  addRoom(roomName) {
    this.itemsCollection.add({
      name: roomName
    });
    this.updateGame();
    this.itemsCollection = null;
  }

  removeUser(user) {
    this.currentGameItem.players = this.currentGameItem.players.filter(function(u) { return u !== user })
    this.updateGame();
  }

  fillPlayers(NoOfPlayer) {
    let l = this.currentGameItem.players.length;;
    for(let i = l; i < NoOfPlayer; i++) {
      let uid = _.uniqueId();
      this.currentGameItem.players.push(
        {
          id: 'dummyUser' + uid,
          name: 'Player ' + uid
        }
      )
    }
    this.updateGame();
  }

  enterRoom(item) {
    let currentGameDoc;

    if (item.id) {
      currentGameDoc =  this.db.collection('games', ref => ref.where('id', '==', item.id));
    }
    else {
      currentGameDoc =  this.db.collection('games', ref => ref.where('name', '==', item.name));
    }

    currentGameDoc.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
    .first()
    .subscribe(
      x => {
        this.currentGameItem = x[0];
        if(this.currentGameItem) {
          if(!this.currentGameItem.players) {
            this.currentGameItem.players = [];
          }

          this.us.getUser().first().subscribe(
            x => {
              let existingUser = this.currentGameItem.players.filter(
                  u => u.id == x.uid
              ).length > 0;

              if(!existingUser) {
                if(this.currentGameItem.players.length > 3) {
                  this.currentGameItem  = null;
                  //this.openSnackBar('room full');
                  return;
                }

                this.currentGameItem.players.push(
                  {
                    name: x.displayName,
                    id: x.uid
                  }
                );
                this.updateGame();
              }
            }
          )
        }
        this.currentItem.next(this.currentGameItem);
      }
    )
  }
}
