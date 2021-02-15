import { Component, OnInit } from '@angular/core';
import { Admin, CrudService } from '../service/crud.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  admins: Admin[];

  constructor(
    private crudService: CrudService,
    private fireservice: FirebaseService
  ) {}

  ngOnInit(): void {
    this.admins = this.crudService.getAdmins();
  }

  async handleDelete(id: string, email: string, password: string) {
    await this.crudService.deleteAdmin(id);
    await this.fireservice.delete(email, password);
    location.reload();
  }

  handleEdit(id: string) {}
}
