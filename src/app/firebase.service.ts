import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {
  }

  getUser(userKey) {
    return this.db.collection('works').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('works').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('works').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('works').snapshotChanges();
  }

  createUser(value) {
    return this.db.collection('works').add({
      title: value.title,
      description: value.description,
      price: value.price
    });
  }

}
