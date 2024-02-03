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
      imagen1:"../assets/imagen/ilove90s.jpg",
      imagen2:"../assets/imagen/alvarezmejia.jpg",
      imagen3:"../assets/imagen/slash.jpg",
      imagen4:"../assets/imagen/losrolling.jpg",
      
      link1:"https://www.eticket.co/eventos.aspx?idartista=674",
      link2:"https://www.eticket.co/eventos.aspx?idartista=665",
      link3:"https://www.eticket.co/eventos.aspx?idartista=652",
      link4:"https://www.eticket.co/eventos.aspx?idartista=679",
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