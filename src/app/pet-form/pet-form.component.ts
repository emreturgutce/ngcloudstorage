import { Component, Input, OnInit } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent implements OnInit {
  @Input() owners: Owner[];
  petName: string;
  petType: 'dog' | 'cat' | 'fish';
  message = '';
  petOwnerId: string;
  petAge: string;
  file: File;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {}

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  createPet() {
    if (this.file) {
      const filename = `${String(Math.floor(Math.random() * 1000000))}.${
        this.file.name.split('.')[1]
      }`;

      this.crudService.uploadImage(filename, this.file);

      this.crudService.addPetToOwner({
        name: this.petName,
        ownerId: this.petOwnerId,
        type: this.petType,
        imageId: filename,
      });
    } else {
      this.crudService.addPetToOwner({
        name: this.petName,
        ownerId: this.petOwnerId,
        type: this.petType,
      });
    }
  }
}
