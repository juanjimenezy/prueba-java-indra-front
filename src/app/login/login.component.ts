import { Component, OnInit } from '@angular/core';
import { Globals } from '../Globals';
import { Usuario } from '../usuario/usuario';
import { LoginService } from './login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  vusername : string;

  constructor(private loginService : LoginService, public globals : Globals,public _router : Router) { }

  ngOnInit(): void {
  }

  login(){

    this.loginService.getUsuarioByLogin(this.vusername).subscribe(
      (vusuario) => {
        this.globals.userLogeado = vusuario;
        this.globals.loggeado = true;
        this._router.navigate(['/Productos'])
      }
    )

  }

}
