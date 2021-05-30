import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SequencesModel } from 'src/app/shared/models/sequences';

@Injectable({
  providedIn: 'root'
})
export class SequencesService {

  constructor(private _firestore: AngularFirestore) { }

  getSequences() {
    return this._firestore.collection('sequences').snapshotChanges().pipe(sequences => {
      return sequences;
    });
}

  createSequence(sequence: SequencesModel):  Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection('sequences')
        .add(sequence)
        .then(resolve => {}, err => reject(err));
    });
  }

  updateSequence(sequence: SequencesModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection('sequences')
        .doc(sequence.documentReference)
        .update(sequence)
        .then(resolve => {}, err => reject(err));
    });
  }

  deleteSequence(sequence: SequencesModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection('sequences')
        .doc(sequence.documentReference)
        .delete()
        .then(resolve => {}, err => reject(err));
    });
  }
}
