import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  datosFans:Usuario[]=[];
  constructor() { }

  ngOnInit(): void {
  this.recuperarDatos();
  }
  recuperarDatos(){
     this.datosFans = JSON.parse(localStorage.getItem("datosFans")||"[]");
  }
}
export interface Usuario {
  nombre:string;
  sexo:string;
  correo:string;
  fechaNacimiento:Date;
}