import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticationService } from '../services/autentication.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validation_message = {
    email: [
      {type: "required", message: "El correo es obligatorio"},
      {type: "pattern", message: "El correo no es valido"},
    ],
    password:[
    { type: "minlength", message: "digite por lo menos 7 caracteres" },
    { type: "maxlength", message: "maximo 15 caracteres" },
    { type: "required", message: "la contraseña es obligatoria" },
    ],
  }
  login_message: any;
  loginForm: FormGroup;
  constructor(private storage: Storage, private formBuilder: FormBuilder, private autenticacionService: AutenticationService, private navControl: NavController,) {
      this.loginForm = this.formBuilder.group({
        email: new FormControl("", Validators.compose([
          Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])),
        
        password: new FormControl("", Validators.compose([
          Validators.minLength(7), Validators.maxLength(15), Validators.required
        ]))
      })
  }

  ngOnInit() {
  }
  login(varData: any){
    console.log(varData);
    this.autenticacionService.loginUser(varData).then( res => {
      this.login_message = res;
      this.storage.set('validationUser',true)
      console.log("enviando a usuario al home");    
      this.navControl.navigateForward('/menu/home');
    }).catch(err =>{
      this.login_message = "usuario no registrado: "+err;
    })
  }
}
