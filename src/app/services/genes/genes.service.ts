import { Injectable } from '@angular/core';
import { GenesModel } from 'src/app/shared/models/genes';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GenesService {
  
  constructor(private _firestore: AngularFirestore) {
  }

 getGenes(selectedCategory: string) {
      return this._firestore.collection(selectedCategory, ref =>ref.orderBy('shortName', 'asc')).snapshotChanges().pipe(genes => {
        console.log(genes);
        return genes;
      });
  }

  createGene(selectedCategory: string, gene: GenesModel):  Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection(selectedCategory)
        .add(gene)
        .then(resolve => {}, err => reject(err));
    });
  }

  updateGene(selectedCategory: string, gene: GenesModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection(selectedCategory)
        .doc(gene.documentReference)
        .update(gene)
        .then(resolve => {}, err => reject(err));
    });
  }

  deleteGene(selectedCategory: string, gene: GenesModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection(selectedCategory)
        .doc(gene.documentReference)
        .delete()
        .then(resolve => {}, err => reject(err));
    });
  }
}
