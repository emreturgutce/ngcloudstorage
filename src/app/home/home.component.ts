import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'ngcloudstorage';
  message = '';
  ownerName: string;
  ownerAge: number;
  ownerAddress: string;
  petName: string;
  petType: 'dog' | 'cat' | 'fish';
  petOwnerId: string;
  petAge: string;
  file: File;
  owners: Owner[];

  @Output() isLogout = new EventEmitter<void>();
  constructor(
    private crudService: CrudService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.owners = this.crudService.getAllOwners();
  }

  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }

  async createRecord() {
    try {
      const record: any = {
        name: this.ownerName,
        age: this.ownerAge,
        address: this.ownerAddress,
        pets: [],
      };

      await this.crudService.createNewOwner(record);

      this.message = 'Record saved to Firebase';
    } catch (error) {
      console.error(error);
    } finally {
      this.ownerName = '';
      this.ownerAge = undefined;
      this.ownerAddress = '';
    }
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  createPet() {
    this.crudService.addPetToOwner({
      name: this.petName,
      ownerId: this.petOwnerId,
      type: this.petType,
    });
  }
}
