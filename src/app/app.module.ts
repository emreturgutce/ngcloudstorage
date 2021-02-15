import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { CrudService } from './service/crud.service'
import { FirebaseService } from './service/firebase.service'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { DetailPetComponent } from './detail-pet/detail-pet.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, DetailComponent, OwnerListComponent, NavbarComponent, OwnerFormComponent, PetFormComponent, PetListComponent, DetailPetComponent, AdminListComponent, AdminFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [CrudService, FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
