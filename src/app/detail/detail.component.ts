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
  image: string;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.owner = await this.crudService.getOwnerById(this.id);
    this.image =
      this.owner.gender === 'male'
        ? 'https://bootdey.com/img/Content/avatar/avatar1.png'
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGqKC8WXE9zYm0uAbibq_YT2Y9DjUzXxlDg&usqp=CAU';
  }

  async onDelete() {
    await this.crudService.deleteOwner(this.owner.id);
    location.href = '/';
  }
}
