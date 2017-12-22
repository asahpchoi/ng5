import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as _ from "lodash";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  isGuest = false;

  constructor(
      private afAuth: AngularFireAuth,
  ) { }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFB() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginGuest() {
    this.isGuest = true;

  }

  logout() {
    this.afAuth.auth.signOut();
  }



  getUser() {
    let uid = _.uniqueId();
    let guestUsers = Observable.of({
      uid: uid,
      displayName: 'Player' + uid
    });
    return this.isGuest?guestUsers:this.afAuth.authState;
  }
}
