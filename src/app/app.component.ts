import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import * as firebase from 'firebase/app';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GetRoomNameComponent } from './get-room-name/get-room-name.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public itemsCollection;
  items: Observable<any[]>;
  user: Observable<firebase.User>;
  currentGameItem;
  newGameName;

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.itemsCollection = db.collection<any>('games');
    this.items = this.itemsCollection.valueChanges();
    this.user = afAuth.authState;
  }

  openSnackBar(message: string) {
    console.log(message);
    this.snackBar.open(message, 'OK', {
      duration: 2000,

    });
  }

  pickGame(item) {
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
        //this.currentGameItem.id = item.id;
        if(this.currentGameItem) {
          if(!this.currentGameItem.players) {
            this.currentGameItem.players = [];
          }

          this.user.first().subscribe(
            x => {
              let existingUser = this.currentGameItem.players.filter(
                  u => u.id == x.uid
              ).length > 0;

              if(!existingUser) {
                if(this.currentGameItem.players.length > 3) {
                  this.currentGameItem = null;
                  this.openSnackBar('room full');
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
              this.openSnackBar('You joined the room');

            }
          )
        }
      }
    )
  }

  getUser(uid) {
    return uid;
  }

  private updateGame() {
    this.itemsCollection.doc(this.currentGameItem.id).update(this.currentGameItem, {merge: true});
  }

  createGame() {
    let dialogRef = this.dialog.open(GetRoomNameComponent, {
      data: {
        roomName: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.itemsCollection.add({
        name: result
      });
      this.updateGame();
      this.itemsCollection = null;
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
