import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'owners/:name', component: DetailComponent },
  { path: 'edit/:name', component: EditOwnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
