import { Component, OnInit } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent implements OnInit {
  owners: Owner[]

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.owners = this.crudService.getAllOwners();
  }
}
