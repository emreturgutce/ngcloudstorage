import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudService, Owner } from '../service/crud.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  title = 'ngcloudstorage';
  owners: Owner[];
  
  constructor(
    private crudService: CrudService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.owners = this.crudService.getAllOwners();
    console.log(this.owners)
  }

  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
