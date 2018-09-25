import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  busqueda="";
  lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur quaerat earum et, quam, ea aperiam explicabo praesentium fugiat iusto repellendus temporibus, labore voluptate quae quis! Consequatur inventore tempora facilis!";
  datos = [1, 992, 3, 4, 5, 6, 7, 8, 9];
  claseNombre = "nombre";
  personas = [{
    nombre: "leandro",
    edad: "12"
  }, {
    nombre: "Juli",
    edad: "13"
  }, {
    nombre: "daldana",
    edad: "20"
  }, {
    nombre: "usuario4",
    edad: "21"
  }, {
    nombre: "Opaez",
    edad: "35"
  }];
  constructor(public Api: ApiService) {


  }

  ngOnInit() {
  }
  forLoops() {
    for (let i = 0; i < this.datos.length; i++) {
      console.log("numero: " + this.datos[i]);
    }

    for (let index in this.datos) {
      console.log("numero+: " + this.datos[index]);
    }
    for (let dato of this.datos) {
      console.log("numero^: " + dato);
    }


    this.datos.forEach((dato, index) => {
      console.log("numero*: " + dato);
    })
    let respuesta = this.datos.filter((dato) => {
      return dato >= 1 && dato < 5
    })
    console.log("mi REspuesta es ", respuesta)

    let respMap = this.datos.map((dato) => {
      let resultado = { "valor": dato };
      return resultado;
    });
    console.log("METODO MAP: ", respMap)
  }

}
