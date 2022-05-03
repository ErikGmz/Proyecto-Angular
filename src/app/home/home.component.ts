import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre !: string;
  sexo!:string;
  correo!: string;
  fechaNacimiento!: string;

  @ViewChild("formulario") formulario!: ElementRef;

  constructor() {
    this.borrarDatos();
  }

  ngOnInit(): void {}

  getFechaActual(): string {
    return formatDate(Date.now() - 315576000000,'yyyy-MM-dd','en-US');
  }

  borrarDatos(): void {
    this.nombre = "";
    this.sexo = "";
    this.correo = "";
    this.fechaNacimiento = "";
  }

  enviarDatos($event: any): void {
    if(this.nombre && this.sexo && this.correo && this.fechaNacimiento) {
      let datosUsuario = {
        nombre: this.nombre,
        sexo: this.sexo,
        correo: this.correo,
        fechaNacimiento: this.fechaNacimiento
      }

      let datosFans = localStorage.getItem("datosFans");
      let arreglo = new Array();
      if(datosFans) {
        arreglo = JSON.parse(datosFans);
      }
      arreglo.push(datosUsuario);
      localStorage.setItem("datosFans", JSON.stringify(arreglo));
      alert("El fanático " + this.nombre + " fue exitosamente registrado.");
      this.borrarDatos();
    }
    this.formulario.nativeElement.reportValidity();
  }
}