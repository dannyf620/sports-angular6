import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  datos=[1,992,3,4,5,6,7,8,9];
  constructor() {

    for(let i=0;i<this.datos.length;i++){
      console.log("numero: "+this.datos[i]);
    }

    for (let index in this.datos){
      console.log("numero+: "+this.datos[index]);
    }
    for (let dato of this.datos){
      console.log("numero^: "+dato);
    }


    this.datos.forEach((dato,index)=>{
      console.log("numero*: "+dato);
    })
    let respuesta=this.datos.filter((dato)=>{
      return dato>=1 && dato <5
    })
    console.log("mi REspuesta es ", respuesta)
    
    let respMap=this.datos.map((dato)=>{
      let resultado={"valor":dato};
      return resultado;
    });
    console.log("METODO MAP: ",respMap )

   }

  ngOnInit() {
  }

}
