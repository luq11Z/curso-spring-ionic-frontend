import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciasDTO } from '../../models/credenciais.dto';
import { AuhtService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds :  CredenciasDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuhtService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
    .subscribe(response => {
      this.auth.successfullogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error => {});
  }

  login() {
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      this.auth.successfullogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error => {});
  }

  signup() {
    this.navCtrl.push('SignupPage')
  }

}
