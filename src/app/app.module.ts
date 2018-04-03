import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

import { ListComponent } from './pets/list/list.component';
import { DetailComponent } from './pets/detail/detail.component';
import { EditComponent } from './pets/edit/edit.component';
import { NewComponent } from './pets/new/new.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    NewComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
