import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeaderComponent } from './header/header.component';
import { Globals } from './Globals';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { RegisterComponent } from './register/register.component';
import { ProductosComponent } from './productos/productos.component';
import { FormComponent } from './productos/form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Globals,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
