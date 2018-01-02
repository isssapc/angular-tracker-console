import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';


//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ConsolaComponent } from './components/consola/consola.component';
import { UbicacionService } from './services/ubicacion.service';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { UsuariosSidenavComponent } from './components/usuarios-sidenav/usuarios-sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ConsolaComponent,
    UsuariosSidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googlemaps
    }),
    AngularMaterialModule
  ],
  providers: [
    UbicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
