import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})

export class ContenidoPage{

  slides =[
    {
      title: "titulo 1",
      descripcion:"",
      image: "",
      helptext: "",
      class: ""
    },
    {
      title: "",
      descripcion:"descripcion 2",
      image: "",
      helptext: "",
      class:""
    },
    {
      title: "",
      descripcion:"",
      image: "",
      helptext: "texto de ayuda 3",
      class:""
    }
  ]
  constructor() { }
}