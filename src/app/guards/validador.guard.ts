import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; 

@Injectable({
  providedIn: 'root'
})

export class ValidadorGuard implements CanActivate {
  constructor(private router: Router, private storage: Storage){}
  
  async canActivate(){
    var varStorage = await this.storage.get('validationUser');
    if(varStorage){
      console.log("el usuario fue al home ")
      return true;
    }else{
      console.log("el usuario no ha visitado el home aun")
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  
}
