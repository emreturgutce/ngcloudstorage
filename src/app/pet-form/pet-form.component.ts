import { Component, Input, OnInit } from '@angular/core';
import { CrudService, Owner, Pet } from '../service/crud.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent implements OnInit {
  @Input() pet: Pet;
  owners: Owner[];
  name: string;
  type: 'dog' | 'cat' | 'fish';
  message = '';
  ownerId: string;
  file: File;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.owners = this.crudService.getAllOwners();
    if (this.pet) {
      this.name = this.pet.name;
      this.type = this.pet.type;
      this.ownerId = this.pet.ownerId;
    }
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  async createPet() {
    if (this.file) {
      const filename = `${String(Math.floor(Math.random() * 1000000))}.${
        this.file.name.split('.')[1]
      }`;

      await this.crudService.uploadImage(filename, this.file);

      this.crudService.createPet({
        name: this.name,
        ownerId: this.ownerId,
        type: this.type,
        imageId: filename,
      });
    } else {
      this.crudService.createPet({
        name: this.name,
        ownerId: this.ownerId,
        type: this.type,
      });
    }

    location.href = '/';
  }

  async updatePet() {
    await this.crudService.updatePet(this.pet.id, {
      name: this.name,
      type: this.type,
      ownerId: this.ownerId,
    });
    location.reload()
  }
}
