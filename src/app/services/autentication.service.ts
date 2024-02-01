import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  emailAdmin = "admin@gmail.com";
  passwordAdmin = "root123";
  constructor(private storage: Storage) {
  }

  loginUser(credenciales: any) {
    if (credenciales.email !== this.emailAdmin) {
      const emailUserPromise = this.extractor(this.storage.get('emailUser'));
      const passwordUserPromise = this.extractor(this.storage.get('password'));
      return Promise.all([
        emailUserPromise,
        passwordUserPromise,
      ]).then(([
        emailUser,
        passwordUser,
      ]) => {
        return new Promise((accept, reject) => {
          if (credenciales.email == emailUser && credenciales.password == passwordUser) {
            accept('login correcto');
          } else {
            reject('login incorrecto');
          }
        });
      });
    }else{
      return new Promise((accept, reject) => {
        if (credenciales.email == this.emailAdmin && credenciales.password == this.passwordAdmin) {
          accept('login correcto');
        } else {
          reject('login incorrecto');
        }
      });
    }
  }

  register(validacion: any) {
      return new Promise((accept, reject) => {
        // Validar que el email no sea "admin@gmail.com"
        if (validacion.email === this.emailAdmin) {
          reject('El email no puede ser el mismo del admin');
        }
        // Validar que las contraseñas coincidan
        if (validacion.password === validacion.password2) {
          accept('Registro correcto');
        } else {
          reject('Las contraseñas no coinciden');
        }
      });
  }

  extractor(objetoPromise: Promise<any>): Promise<string> {
    return objetoPromise.then((value) => {
      return value.toString(); // convierte el valor a string
    });
  }
}
