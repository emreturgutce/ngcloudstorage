import { Component, Input, OnInit } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent implements OnInit {
  @Input() owners: Owner[];

  constructor() {}

  ngOnInit() {}
}
