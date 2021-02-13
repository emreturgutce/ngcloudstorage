import { Component, Input, OnInit } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';

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
  owner: any;
  @Input() name: string;

  constructor(private crudService: CrudService) {}

  async ngOnInit() {
    if (this.name) {
      this.owner = await this.crudService.getOwnerByName(this.name);

      this.ownerName = this.owner.name;
      this.ownerAge = this.owner.age;
      this.ownerAddress = this.owner.address;
    }
  }

  async createRecord() {
    if (!this.name) {
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
    } else {
      const record = {
        name: this.ownerName,
        age: this.ownerAge,
        address: this.ownerAddress,
      };

      await this.crudService.updateOwner(this.owner.id, record as Owner);
    }
  }
}
