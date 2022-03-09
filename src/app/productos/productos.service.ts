import { Injectable } from '@angular/core';
import { Producto } from './producto';
import Swal from 'sweetalert2';
import { Globals } from '../Globals';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable,catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private  http: HttpClient,private globals : Globals) { }

  findAll() : Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.globals.urlProductos}`).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error' , e.error.mensaje,'error');
        return  throwError(e);
      })
    );
  }

  delete(id : number) {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.delete(`${this.globals.urlProductos}`,{params : params});
  }

  findById(id : number) : Observable<Producto> {
    let params = new HttpParams();
    params = params.append('idProducto', id);
    return this.http.get<Producto>(`${this.globals.urlProductos}ById`,{params : params})
  }

  update(producto : Producto) : Observable<Producto> {
    return this.http.post<Producto>(`${this.globals.urlProductos}`,producto).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error' , e.error.mensaje,'error');
        return  throwError(e);
      })
    );
  };

  create(producto : Producto) : Observable<Producto> {
    return this.http.put<Producto>(`${this.globals.urlProductos}`,producto).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error' , e.error.mensaje,'error');
        return  throwError(e);
      })
    );
  };
  
}
