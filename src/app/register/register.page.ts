import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {AutenticationService} from '../services/autentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerMessage: any;
  registerForm: FormGroup;
  validation_message = {
    email: [
      {type: "required", message: "El correo es obligatorio"},
      {type: "pattern", message: "El correo no es valido"},
    ],
    password:[
    { type: "minlength", message: "digite por lo menos 7 caracteres" },
    { type: "maxlength", message: "maximo 15 caracteres" },
    { type: "required", message: "la contraseña es obligatoria" },
    //{ type:"pattern", message:"te faltaun numero"},
    ],
    password2:[
    { type: "minlength", message: "digite por lo menos 7 caracteres" },
    { type: "maxlength", message: "maximo 15 caracteres" },
    { type: "required", message: "la contraseña es obligatoria" },
    //{ type:"pattern", message:"te falta  un numero"},
    ],
    name:[
    { type: "minlength", message: "digite por lo menos 3 caracteres" },
    { type: "maxlength", message: "maximo 20 caracteres" },
    { type: "required", message: "el nombre es obligatorio" },
    ],
    lastName:[
    { type: "minlength", message: "digite por lo menos 3 caracteres" },
    { type: "maxlength", message: "maximo 20 caracteres" },
    { type: "required", message: "el apellido es obligatorio" },
    ],
  }

  constructor(private storage: Storage, private formBuilder: FormBuilder, private navControl: NavController,private autenticacionService: AutenticationService){
    var pattrn = "/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])$/";

    this.registerForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
      ])),
      
      password: new FormControl("", Validators.compose([
        Validators.minLength(7), Validators.maxLength(15), Validators.required,
        //Validators.pattern(pattrn)
      ])),
      
      password2: new FormControl("", Validators.compose([
        Validators.minLength(7), Validators.maxLength(15), Validators.required,
        //Validators.pattern(pattrn)
      ])),

      name: new FormControl("", Validators.compose([
        Validators.minLength(3), Validators.maxLength(20), Validators.required
      ])),
      
      lastName: new FormControl("", Validators.compose([
        Validators.minLength(3), Validators.maxLength(20), Validators.required
      ])),
    })
  }

  ngOnInit() {
  }
  //acciones del boton o servicio
  register(data: any){
    console.log(data);
    this.autenticacionService.register(data).then( res => {

      this.registerMessage = res;
      //this.storage.set('correctAllowed',true)  

      this.storage.set("emailUser",data.email);
      this.storage.set("nombreUser",data.name);
      this.storage.set("lastNameUser",data.lastName);
      this.storage.set("password",data.password);

      this.navControl.navigateForward('/login');
    }).catch(err =>{
      this.registerMessage = err;
    })
  }
  goToLogin(){
    this.navControl.navigateBack("/login");
  }
}
