import { Component, OnInit } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  owner: Owner;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    const owners = this.crudService.getAllOwners();

    console.log(owners)
  }
}
