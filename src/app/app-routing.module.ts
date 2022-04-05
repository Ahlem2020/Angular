import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  {path: 'home' , component : HomeComponent},
 {path: 'to-do' , component : ToDoComponent},
 {path: '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
