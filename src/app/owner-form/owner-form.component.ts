import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css'],
})
export class OwnerFormComponent implements OnInit {
  message = '';
  ownerName: string;
  ownerAge: number;
  ownerAddress: string;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {}

  async createRecord() {
    try {
      const record: any = {
        name: this.ownerName,
        age: this.ownerAge,
        address: this.ownerAddress,
        pets: [],
      };

      await this.crudService.createNewOwner(record);

      this.message = 'Record saved to Firebase';
    } catch (error) {
      console.error(error);
    } finally {
      this.ownerName = '';
      this.ownerAge = undefined;
      this.ownerAddress = '';
    }
  }
}
