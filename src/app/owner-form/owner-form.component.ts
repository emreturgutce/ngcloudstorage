import { Component, Input, OnInit } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css'],
})
export class OwnerFormComponent implements OnInit {
  @Input() owner: any;
  message = '';
  name: string;
  email: string;
  phone: string;
  age: number;

  constructor(private crudService: CrudService) {}

  async ngOnInit() {
    if (this.owner) {
      this.name = this.owner.name;
      this.email = this.owner.email;
      this.phone = this.owner.phone;
      this.age = this.owner.age;
    }
  }

  async handleCreate() {
    try {
      const record: any = {
        name: this.name,
        age: this.age,
        email: this.email,
        phone: this.phone,
      };

      await this.crudService.createNewOwner(record);

      this.message = 'Record saved to Firebase';
    } catch (error) {
      console.error(error);
    } finally {
      this.name = '';
      this.age = undefined;
      this.email = '';
      this.phone = '';
    }

    location.href = '/';
  }

  async handleUpdate() {
    await this.crudService.updateOwner(this.owner.id, {
      name: this.name,
      age: this.age,
      email: this.email,
      phone: this.phone,
    });
  }
}
