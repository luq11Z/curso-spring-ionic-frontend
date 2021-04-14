import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder) {

                this.formGroup = this.formBuilder.group({
                  nome:['Lucas', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
                  email: ['lucas@gmail.com', [Validators.required, Validators.email]],
                  tipo: ['1', [Validators.required]],
                  cpfOuCnpj: ['81386663310', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
                  senha: ['123', [Validators.required]],
                  logradouro: ['Rua Joaquim Correia', [Validators.required]],
                  numero: ['129', [Validators.required]],
                  complemento: ['Apto 3', []],
                  bairro: ['Copacabana', []],
                  cep: ['123948211', [Validators.required]],
                  telefone1: ['91232819', [Validators.required]],
                  telefone2: ['', []],
                  telefone3: ['', []],
                  estadoId: [null, [Validators.required]],
                  cidadeId: [null, [Validators.required]]
                });
  }

  signupUser() {
    console.log('Enviou o formulário');
  }

}
