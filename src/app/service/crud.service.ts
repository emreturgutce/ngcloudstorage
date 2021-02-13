import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Owner {
  id: string;
  name: string;
  age: number;
  address: string;
  pets: any[];
}

export interface Pet {
  name: string;
  type: 'dog' | 'cat' | 'fish';
  ownerId: string;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private fireservice: AngularFirestore) {}

  updateOwner(ownerId: string, data: Owner) {
    return this.fireservice.doc(`Owners/${ownerId}`).update(data);
  }

  deleteOwner(ownerId: string) {
    return this.fireservice.doc(`Owners/${ownerId}`).delete();
  }

  createNewOwner(owner: Owner) {
    return this.fireservice.collection('Owners').add(owner);
  }

  getAllOwners(): Owner[] {
    const owners: Owner[] = [];

    this.fireservice
      .collection('Owners')
      .get()
      .forEach((doc) =>
        doc.docs.forEach((d) =>
          owners.push({ ...(d.data() as object), id: d.id } as Owner)
        )
      );

    return owners;
  }

  async addPetToOwner(pet: Pet) {}
}
