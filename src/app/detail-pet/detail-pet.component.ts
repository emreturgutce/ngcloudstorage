import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.css'],
})
export class DetailPetComponent implements OnInit {
  pet: any;
  name: string;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.pet = await this.crudService.getPetByName(this.name);
  }

  async onDelete() {
    await this.crudService.deletePet(this.pet.id);
  }
}
