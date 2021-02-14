import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { DetailPetComponent } from './detail-pet/detail-pet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'owners/:id', component: DetailComponent },
  { path: 'pets/:name', component: DetailPetComponent },
  { path: 'create-owner', component: OwnerFormComponent },
  { path: 'create-pet', component: PetFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
