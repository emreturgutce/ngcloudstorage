import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService, Owner } from '../service/crud.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  owner: Owner;
  name: string;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.owner = await this.crudService.getOwnerByName(this.name);
  }

  async onDelete() {
    await this.crudService.deleteOwner(this.owner.id);
  }
}
