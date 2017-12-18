import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public itemsCollection;
  items: Observable<any[]>;
  currentGameDoc = null;
  currentGameItem;
  newGameName;

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.itemsCollection = db.collection<any>('games');
    this.items = this.itemsCollection.valueChanges();
  }

  pickGame(item) {
    if (item.id) {
      this.currentGameDoc =  this.db.collection('games', ref => ref.where('id', '==', item.id));
    }
    else {
      this.currentGameDoc =  this.db.collection('games', ref => ref.where('name', '==', item.name));
    }

    this.currentGameDoc.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as game;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
    .subscribe(
      x => {
        this.currentGameItem = x[0];
      }
    )
  }

  updateGame() {
    this.itemsCollection.doc(this.currentGameItem.id).update(this.currentGameItem, {merge: true});
  }

  createGame() {
    this.itemsCollection.add({
      name: this.newGameName
    }).then(
      /////ref => this.currentGameItem.id = ref.id
    );

    this.updateGame();

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
