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
  id: string;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pet = await this.crudService.getPetById(this.id);
    this.pet[
      'imageId'
    ] = `https://firebasestorage.googleapis.com/v0/b/angular-crud-5e572.appspot.com/o/${
      this.pet.imageId || '350259.jpg'
    }?alt=media&token=d882fdca-879e-4911-b83c-ec35a755584b`;
  }

  async onDelete() {
    await this.crudService.deletePet(this.pet.id);
  }
}
