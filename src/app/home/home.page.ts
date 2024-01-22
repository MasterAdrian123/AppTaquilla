import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

  constructor() {}

}
