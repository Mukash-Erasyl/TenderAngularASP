import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FindTenderComponentComponent } from './main-menu/find-tender-component/find-tender-component.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './main-menu/find-tender-component/post/post.component';
import { ModelModule } from "./models/model.module";
import { MapComponent } from './map/map.component';
import { CreateComponent } from './main-menu/create/create.component';
import { CreateContentCatComponent } from './main-menu/create/create-content-cat/create-content-cat.component';







@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FindTenderComponentComponent,
    FooterComponent,
    PostComponent,
    MapComponent,
    CreateComponent,
    CreateContentCatComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ModelModule ,    HttpClientModule ,FormsModule ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
