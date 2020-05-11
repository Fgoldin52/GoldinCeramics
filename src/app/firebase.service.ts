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

  filterVases() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Vase')).snapshotChanges();
  }

  filterPlates() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Decorative Plate')).snapshotChanges();
  }

  filterDreidels() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Dreidel')).snapshotChanges();
  }

  filterCandleSticks() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Candle Stick')).snapshotChanges();
  }

  filterMezuzahs() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Mezuzah')).snapshotChanges();
  }

  filterMirrors() {
    return this.db.collection('works', ref => ref.where('type', '==', 'Mirror')).snapshotChanges();
  }

  filterUnder100() {
    return this.db.collection('works', ref => ref.where('price', '<', 100)).snapshotChanges();
  }

  filterUnder250() {
    return this.db.collection('works', ref => ref.where('price', '>=', 100).where('price', '<', 250)).snapshotChanges();
  }

  filterUnder500() {
    return this.db.collection('works', ref => ref.where('price', '>=', 250).where('price', '<', 500)).snapshotChanges();
  }

  filterOver500() {
    return this.db.collection('works', ref => ref.where('price', '>=', 500)).snapshotChanges();
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
      price: value.price,
      type: value.type,
      etsy: value.etsy
    });
  }

}
