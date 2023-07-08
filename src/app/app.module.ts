import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pagina/formulario/formulario.component';
import { HeaderComponent } from './pagina/header/header.component';
import { FooterComponent } from './pagina/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListagemComponent } from './pagina/listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListagemComponent,
    HeaderComponent,
    FooterComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
