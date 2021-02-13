import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;

  @Output() isLogout = new EventEmitter<void>();
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.firebaseService.isLoggedIn;
  }
  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
