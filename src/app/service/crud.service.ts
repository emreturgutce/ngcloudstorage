import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

export interface Owner {
  id?: string;
  name: string;
  age: number;
  email: string;
  phone: string;
}

export interface Pet {
  id?: string;
  name: string;
  type: 'dog' | 'cat' | 'fish';
  ownerId: string;
  imageId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(
    private fireservice: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  uploadImage(imageId: string, file: File) {
    this.storage.upload(imageId, file);
  }

  updateOwner(ownerId: string, data: Owner) {
    return this.fireservice.doc(`Owners/${ownerId}`).update(data);
  }

  updatePet(petId: string, data: Pet) {
    return this.fireservice.doc(`Pets/${petId}`).update(data);
  }
  async getOwnerById(id: string) {
    const arr = [];
    await this.fireservice
      .doc(`Owners/${id}`)
      .get()
      .forEach((doc) => arr.push({ ...(doc.data() as object), id: doc.id }));

    const pets = [];
    (
      await this.fireservice
        .collection('Pets')
        .ref.where('ownerId', '==', id)
        .get()
    ).forEach((doc) => pets.push({ ...(doc.data() as object), id: doc.id }));

    return {
      ...arr[0],
      pets,
    };
  }

  async getPetByName(name: string) {
    const arr = [];
    (
      await this.fireservice
        .collection('Pets')
        .ref.where('name', '==', name)
        .get()
    ).forEach((doc) => arr.push({ ...(doc.data() as object), id: doc.id }));
    return arr[0];
  }

  deleteOwner(ownerId: string) {
    return this.fireservice.doc(`Owners/${ownerId}`).delete();
  }
  deletePet(petId: string) {
    return this.fireservice.doc(`Pets/${petId}`).delete();
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
  createPet(pet: Pet) {
    return this.fireservice.collection('Pets').add(pet);
  }

  getPets(): Pet[] {
    const pets: Pet[] = [];

    this.fireservice
      .collection('Pets')
      .get()
      .forEach((doc) =>
        doc.docs.forEach((d) =>
          pets.push({ ...(d.data() as object), id: d.id } as Pet)
        )
      );

    return pets;
  }
}
