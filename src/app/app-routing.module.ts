import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { DetailPetComponent } from './detail-pet/detail-pet.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminFormComponent } from './admin-form/admin-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'owners/:id', component: DetailComponent },
  { path: 'pets/:id', component: DetailPetComponent },
  { path: 'create-owner', component: OwnerFormComponent },
  { path: 'create-pet', component: PetFormComponent },
  { path: 'admin-list', component: AdminListComponent },
  { path: 'admin-form', component: AdminFormComponent },
  { path: 'admin-form/:id', component: AdminFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
