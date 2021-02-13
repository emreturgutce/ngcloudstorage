import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

export interface Owner {
  name: string;
  age: number;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireservice: AngularFirestore) { }

  createNewOwner(owner: Owner): Promise<any> {
    return this.fireservice.collection('Owners').add(owner)
  }
}
