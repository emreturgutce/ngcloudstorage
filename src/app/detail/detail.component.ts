import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService, Owner } from '../service/crud.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  owner: any;
  id: string;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.owner = await this.crudService.getOwnerById(this.id);
  }

  async onDelete() {
    await this.crudService.deleteOwner(this.owner.id);
  }
}
