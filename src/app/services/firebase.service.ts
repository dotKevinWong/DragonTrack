import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Place {
  id?: string,
  name?: string,
  address: string,
  user: string
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private places: Observable<Place[]>;
  private placeCollection: AngularFirestoreCollection<Place>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.placeCollection = this.afs.collection<Place>('places', ref => ref.where("user", "==", this.afAuth.auth.currentUser.uid));
    this.places = this.placeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  /* Global functions for Firestore Calls */
  getPlaces(): Observable<Place[]> {
    return this.places;
  }

  getPlace(id: string): Observable<Place> {
    return this.placeCollection.doc<Place>(id).valueChanges().pipe(
      take(1),
      map(place => {
        place.id = id;
        return place
      })
    );
  }

  addPlace(place: Place): Promise<DocumentReference> {
    return this.placeCollection.add(place);
  }

  updatePlace(place: Place): Promise<void> {
    return this.placeCollection.doc(place.id).update({ name: place.name, address: place.address });
  }

  deletePlace(id: string): Promise<void> {
    return this.placeCollection.doc(id).delete();
  }

}
