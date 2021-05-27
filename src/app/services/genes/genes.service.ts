import { Injectable } from '@angular/core';
import { GenesModel } from 'src/app/shared/models/genes';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GenesService {
  constructor(private _firestore: AngularFirestore) {}

  getGenes() {
    return this._firestore.collection('genes').snapshotChanges();
  }

  createGene(gene: GenesModel):  Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection('genes')
        .add(gene)
        .then(resolve => {}, err => reject(err));
    });
  }

  updateGene(gene: GenesModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection('genes')
        .doc(gene.documentReference)
        .update(gene)
        .then(resolve => {}, err => reject(err));
    });
  }

  deleteGene(gene: GenesModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection('genes')
        .doc(gene.documentReference)
        .delete()
        .then(resolve => {}, err => reject(err));
    });
  }
}
