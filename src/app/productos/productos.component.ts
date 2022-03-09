import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductosService } from './productos.service';
import Swal from 'sweetalert2';
import { Globals } from '../Globals';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos : Producto[];

  constructor(private productoService : ProductosService,private globals : Globals,private router: Router) { }

  ngOnInit(): void {
    if(!this.globals.loggeado){
      this.router.navigate(['/Login'])
    }else
    this.productoService.findAll().subscribe(
      (productos)=>{
        this.productos = productos;
      }

    )
    
  }


  delete( producto : Producto){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
    title: 'Esta seguro?',
    text: `¿Seguro que desea eliminar al producto ${producto.nombre}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.delete(producto.idProducto).subscribe(
          response => {
            this.productos = this.productos.filter(pro => pro !== producto)
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `${producto.nombre} Ha sido eliminado`,
              'success'
            )
          }
        )

      }
})

  }


}
