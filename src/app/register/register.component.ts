import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario : Usuario = new Usuario();
  

  constructor(private usuarioService : UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.usuario)
    this.usuarioService.register(this.usuario).subscribe(
      (usuario) =>{
        this.router.navigate(['/Login'])
        Swal.fire('Nuevo Articulo', ` ${usuario.nombre} creado con exito!`, 'success');
      }
    )
  }

}
