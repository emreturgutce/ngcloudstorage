import { Component, Input, OnInit } from '@angular/core';
import { CrudService, Pet } from '../service/crud.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  @Input() pets: Pet[];

  constructor(private crudService: CrudService) {}

  ngOnInit() {}

  async handleDelete(ownerId: string) {
    await this.crudService.deleteOwner(ownerId);
  }
}
