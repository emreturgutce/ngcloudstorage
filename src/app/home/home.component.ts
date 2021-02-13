import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'ngcloudstorage';
  message = '';
  owner: string;
  ownerName: string;
  ownerAge: number;
  ownerAddress: string;

  @Output() isLogout = new EventEmitter<void>();
  constructor(
    private crudService: CrudService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }

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
