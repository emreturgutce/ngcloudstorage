import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn = false;

  constructor(private firebaseAuth: AngularFireAuth) {}

  async delete(email: string, password: string) {
    await (
      await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    ).user.delete();
  }

  async update(
    oldEmail: string,
    oldPassword: string,
    email: string,
    password: string
  ) {
    await (
      await this.firebaseAuth.signInWithEmailAndPassword(oldEmail, oldPassword)
    ).user.updateEmail(email);
    await (
      await this.firebaseAuth.signInWithEmailAndPassword(oldEmail, oldPassword)
    ).user.updatePassword(password);
  }

  async signin(email: string, password: string) {
    try {
      const res = await this.firebaseAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    } catch (error) {
      this.isLoggedIn = false;
    }
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
