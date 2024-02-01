import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private router:Router){}
  
  async canActivate(){
    const validateUser = await this.storage.get('validationUser');
    console.log("guardian dice: ",validateUser);
    if(validateUser){
      console.log("el usuario ya esta logueado")
      return true
    }else{
      console.log("el usuario no esta logueado")
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
