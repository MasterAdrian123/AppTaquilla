import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  slides= [
    {
      titulo: "ALVAREZMEJIA",
      imagen: "../assets/imagen/alvarezmejia.jpg",
      descripcion: `Alvarezmejia es el universo paralelo al Diamante Eléctrico del guitarrista y compositor Daniel Álvarez.`,
      fondo:"bg-black",
      color_letra:"l-white",
      fecha:"24/01/2024",
      tipo_letra:"ff-Franklin",
      letra_titulo:"grande",
      letra_fecha:"grande2",
      letra_descripcion:"",
      letra_footer:""
    },
    {
      titulo: "ILOVE90's",
      imagen: "../assets/imagen/ilove90s.jpg",
      descripcion: `Como es costumbre desde hace 11 años, I LOVE 90S da inicio al nuevo año, y el 2024 empezará con la mejor fiesta noventera de Colombia.`,
      fondo:"bg-purple",
      color_letra:"l-celeste",
      fecha:"FEBRERO: 3 - 10",
      tipo_letra:"ff-impact",
      letra_titulo:"grande2",
      letra_fecha:"grande",
      letra_descripcion:"",
      letra_footer:"",
    },
    {
      titulo: "LOS ROLLING RUANAS",
      fecha: "14/02/2024",
      imagen: "../assets/imagen/losrolling.jpg",
      descripcion: `Siendo una de las agrupaciones más reconocidas en Colombia actualmente, 
      Los Rolling Ruanas`,
      fondo:"bg-azulOscuro",
      color_letra:"l-yellow",
      tipo_letra:"ff-cursive",
      letra_titulo:"grande",
      letra_fecha:"grande2 ff-impact",
      letra_descripcion:"mediano",
      letra_footer:"ff-impact"
    },
    {
      titulo: "SLASH",
      fecha: "26/01/2024",
      imagen: "../assets/imagen/slash.jpg",
      descripcion: `Slash y Myles Kennedy visitan Colombia como parte de su gira 
      THE RIVER IS RISING - REST OF THE WORLD TOUR "24.`,
      fondo:"bg-gray",
      color_letra:"l-white",
      tipo_letra:"ff-nose",
      letra_titulo:"grande3 ",
      letra_fecha:"grande",
      letra_descripcion:"",
      letra_footer:"l-black mediano ff-Franklin"
    },
    
  ]
  eventList: any;
  constructor(private router: Router, private storage: Storage, private events: EventsService) {
  }
  ionViewDidEnter(){
    this.events.getEvents().then(
      res => {
        this.eventList = res;
        console.log("eventos desde el servidor: ",this.eventList)
      }
    )
    //console.log("local events:  ",this.events.getLocalEvents().events);
  }
  redireccion(){
    this.storage.set('visualizo', true);
    this.router.navigateByUrl('/contenido');
  }
}
