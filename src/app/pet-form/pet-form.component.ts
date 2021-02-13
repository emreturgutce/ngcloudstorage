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
    this.crudService.addPetToOwner({
      name: this.petName,
      ownerId: this.petOwnerId,
      type: this.petType,
    });
  }
}
