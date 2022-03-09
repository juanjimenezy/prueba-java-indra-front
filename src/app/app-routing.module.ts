import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './productos/form.component';
import { ProductosComponent } from './productos/productos.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [

  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'Login', component: LoginComponent},
  { path: 'Register', component: RegisterComponent},
  { path: 'Productos', component: ProductosComponent},
  { path: 'Productos/form', component: FormComponent},
  { path: 'Productos/form/:id', component: FormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
