import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'firebase-angular-auth';
  isLoggedIn = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('user') !== null;
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);

    if (this.firebaseService.isLoggedIn) {
      this.isLoggedIn = true;
    }
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isLoggedIn = true;
    }
  }

  async onLogout() {
    this.isLoggedIn = false;
  }
}
