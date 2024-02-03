import { Injectable } from '@angular/core';
import * as dataEvents from './events.json';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer ="http://190.131.209.106";
  constructor() { }

  getEvents(){
    // pide los eventos
    return fetch(`${this.urlServer}/events`).then(
      response => response.json()
    )
  }

  getCategories(){
    // pide las categorias
    return fetch(`${this.urlServer}/categories`).then(
      response => response.json()
    )
  }
  getIdCat(){
    // pide id de las categorias eventos
    return fetch(`${this.urlServer}/categories/:id`).then(
      response => response.json()
    )
  }

  getLocalEvents(){
    return dataEvents;
  }
  //nos solicita pedir categorias fetch(`${this.urlServer}/categories`)
  //get hacia "/categories/:id"
}
