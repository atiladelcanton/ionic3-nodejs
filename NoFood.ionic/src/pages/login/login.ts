import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private userSr: UsuarioProvider) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

  async login(): Promise<void> {
    let result = await this.userSr.autenticate(this.form.email, this.form.password);
    if (result.success) {
      UsuarioProvider.registerLogin(result.data);
      this.navCtrl.setRoot('CategoriaPage');
    }

  }
  cadastro(): void {
    this.navCtrl.setRoot('CadastroPage');
  }

}
