import { Injectable } from "@angular/core";
import { Usuario } from "./usuario/usuario";



@Injectable()

export class Globals {

    loggeado = false;
    userLogeado : Usuario;

    host : string = 'http://localhost:8090';
    mapping : string = '/Api';

    urlUsuarios : string = this.host + this.mapping + '/usuarios';
    urlProductos : string = this.host + this.mapping + '/productos';

}