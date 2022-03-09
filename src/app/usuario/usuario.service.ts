import { Injectable } from '@angular/core';
import { Globals } from '../Globals';
import { Usuario } from './usuario';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable,catchError,throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private  http: HttpClient,private globals : Globals) { }

  register(usuario : Usuario) : Observable<Usuario> {
    return this.http.put<Usuario>(`${this.globals.urlUsuarios}`,usuario).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error' , e.error.mensaje,'error');
        return  throwError(e);
      })
    );
  };
}
