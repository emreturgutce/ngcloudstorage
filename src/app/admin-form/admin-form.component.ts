import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
  id: string;
  email: string;
  password: string;
  message: string;
  oldPassword: string;
  oldEmail: string;

  constructor(
    private crudService: CrudService,
    private fireservice: FirebaseService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      const admin = await this.crudService.getAdminById(this.id);
      this.email = admin.email;
      this.password = admin.password;
      this.oldEmail = admin.email;
      this.oldPassword = admin.password;
    }
  }

  handleCloseAlert() {
    this.message = null;
  }

  async handleCreate() {
    try {
      await this.fireservice.signup(this.email, this.password);
      await this.crudService.createAdmin({
        email: this.email,
        password: this.password,
      });

      location.href = '/';
    } catch (error) {
      const errorMessage = error.code
        .split('/')[1]
        .replace('-', ' ')
        .toUpperCase();

      if (errorMessage === 'WEAK PASSWORD') {
        this.message = 'Make sure your password is secure enough.';
      } else {
        this.message = 'Make sure fields are valid.';
      }
    }
  }

  async handleUpdate() {
    try {
      await this.fireservice.update(
        this.oldEmail,
        this.oldPassword,
        this.email,
        this.password
      );
      await this.crudService.updateAdmin(this.id, {
        email: this.email,
        password: this.password,
      });

      location.href = '/';
    } catch (error) {
      const errorMessage = error.code
        .split('/')[1]
        .replace('-', ' ')
        .toUpperCase();

      if (errorMessage === 'WEAK PASSWORD') {
        this.message = 'Make sure your password is secure enough.';
      } else {
        this.message = 'Make sure fields are valid.';
      }
    }
  }
}
