import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddboxComponent } from './addbox/addbox.component';
import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

const routes: Routes = [
  {
    path: '',
    component: SearchboxComponent 
  },
  {
    path: 'addbox',
    component: AddboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
