import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Owner {
  name: string;
  age: number;
  address: string;
  pets: any[];
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private fireservice: AngularFirestore) {}

  createNewOwner(owner: Owner): Promise<any> {
    return this.fireservice.collection('Owners').add(owner);
  }

  getAllOwners(): Owner[] {
    const owners: Owner[] = [];

    this.fireservice
      .collection('Owners')
      .get()
      .forEach((doc) =>
        doc.docs.forEach((d) => owners.push(d.data() as Owner))
      );

    return owners;
  }
}
