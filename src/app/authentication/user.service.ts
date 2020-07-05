import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

    constructor(
        public db: AngularFirestore,
        public afAuth: AngularFireAuth
    ) {
    }


    getCurrentUser() {
        return new Promise<any>((resolve, reject) => {
            // tslint:disable-next-line:no-shadowed-variable
            const user = firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    reject('No user logged in');
                } else {
                    resolve(user);
                }
            });
        });
    }

    updateCurrentUser(value) {
        return new Promise<any>((resolve, reject) => {
            const user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
}