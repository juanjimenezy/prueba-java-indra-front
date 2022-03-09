import { Component, OnInit } from '@angular/core';
import { Globals } from '../Globals';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from './productos.service';
import { Categoriaproducto } from './categoriaproducto';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  idCategoriaPrudcto : Categoriaproducto = new Categoriaproducto();
  sestado : any = "A";
  public producto : Producto = new Producto();
  crear : boolean = true;

  constructor(private router: Router,private activateRoute: ActivatedRoute, private globals : Globals, private productosService : ProductosService) { }

  ngOnInit(): void {
    if(!this.globals.loggeado){
      this.router.navigate(['/Login']);
    }else
    this.cargarProductos();
  }



  cargarProductos(){
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.productosService.findById(id).subscribe(
          (prod) => {
            this.producto = prod;
            this.crear = false;

          }
        )
      }
    }
    );
  }

  actualizar(){
    this.producto.estado = this.sestado;
    this.productosService.update(this.producto).subscribe(
      (producto) =>{
        this.router.navigate(['/Productos'])
        Swal.fire('Usuario ', ` ${producto.nombre} actualizado con exito!`, 'success');
      }
    );
  }

  create(){
    console.log(this.idCategoriaPrudcto);
    this.producto.idCategoriaPrudcto = this.idCategoriaPrudcto;
    this.producto.estado = this.sestado;

    this.productosService.create(this.producto).subscribe(
      (producto) =>{
        this.router.navigate(['/Productos'])
        Swal.fire('Nuevo producto', ` ${producto.nombre} creado con exito!`, 'success');
      }
    );
  }

}
