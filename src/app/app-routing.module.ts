import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EidtComponent } from './eidt/eidt.component';
import { DeleteComponent } from './delete/delete.component';
import { CommentsComponent } from './comments/comments.component';



const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent}, // defining the default component
  {path:'add',component: AddComponent},
  {path:'list',component: ListComponent},
  {path:'eidt/:id',component: EidtComponent},
  {path:'delete/:id', component: DeleteComponent},
  {path:'comments/:id', component: CommentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
