import { Component } from '@angular/core';
import { CrudService, Owner } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngcloudstorage';
  message = '';
  owner: string;
  ownerName: string;
  ownerAge: number;
  ownerAddress: string;

  constructor(private crudService: CrudService) {}

  async createRecord() {
    try {
      const record: Owner = {
        name: this.ownerName,
        age: this.ownerAge,
        address: this.ownerAddress,
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
