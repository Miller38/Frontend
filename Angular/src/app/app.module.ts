import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { SobreNosotrosComponent } from './plantilla/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import { ServiciosComponent } from './plantilla/servicios/servicios.component';
import { InformacionComponent } from './plantilla/informacion/informacion.component';
import { UbicacionComponent } from './plantilla/ubicacion/ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    ServiciosComponent,
    InformacionComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
