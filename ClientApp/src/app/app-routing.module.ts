import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './main-menu/create/create.component';
import { FindTenderComponentComponent } from './main-menu/find-tender-component/find-tender-component.component';
import { PostComponent } from './main-menu/find-tender-component/post/post.component';
import { MainMenuComponent } from './main-menu/main-menu.component';



const routes: Routes = [
  { path: "mainMenu", component: MainMenuComponent } , 
  
  { path: "findTender", component: FindTenderComponentComponent } ,
  { path: "createTender", component: CreateComponent } ,
  { path: "post", component: PostComponent } 

];



@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
