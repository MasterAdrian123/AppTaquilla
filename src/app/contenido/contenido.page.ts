import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})

export class ContenidoPage{

  slides =[
    {
      imagen:"../assets/imagen/ilove90s.jpg",
      link:"https://www.eticket.co/eventos.aspx?idartista=674",
    },
    {
      imagen:"../assets/imagen/alvarezmejia.jpg",
      link:"https://www.eticket.co/eventos.aspx?idartista=665",
    },
    {
      imagen:"../assets/imagen/slash.jpg",
      link:"https://www.eticket.co/eventos.aspx?idartista=652",
    },
    {
      imagen:"../assets/imagen/losrolling.jpg",
      link:"https://www.eticket.co/eventos.aspx?idartista=679",
    },
    
  ]
  constructor(private router: Router, private storage: Storage) { }

  ionViewDidEnter(){
    this.storage.set('visualizo', true);
  }
  
  redireccion(){
    this.router.navigateByUrl('menu/home');
  }
}