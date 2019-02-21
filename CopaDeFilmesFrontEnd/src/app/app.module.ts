import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinalCampeonatoComponent } from './final-campeonato/final-campeonato.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CampeonatoService } from './services/campeonato.service';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinalCampeonatoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    ToastrModule.forRoot()
  ],
  providers: [CampeonatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
