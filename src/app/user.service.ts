import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as _ from "lodash";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  isGuest = false;
  guestInfo = null;


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
    if(this.isGuest) {
      if(!this.guestInfo) {
        let uid = _.uniqueId();
        this.guestInfo = Observable.of({
          uid: uid,
          displayName: 'Player ' + uid
        });
      }
      return this.guestInfo;
    }
    return this.afAuth.authState;
  }
}
