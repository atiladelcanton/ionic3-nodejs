import { HttpResultModel } from './../../app/models/HttpResultModel';
import { HttpProvider } from './../http/http';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { configHelper } from '../../app/helpers/configHelper';


@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{
  url: string = `${configHelper.url}user`;
  constructor(public http: HttpProvider) {
    super(`${configHelper.url}user`, http);
  }
  /**
   * Autentica o usuário na api
   * @param email string
   * @param password string
   * @return Promisse<HttpResultModel>
   */
  async autenticate(email: string, password: string): Promise<HttpResultModel> {
    return await this.http.post(`${this.url}/auth`, { email: email, password: password });
  }
  /**
   * Registra um novo Usuario
   * @param usuario UsuarioModel
   * @returns Promisse<HttpResultModel>
   */
  async register(usuario: UsuarioModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/register`, usuario);
  }

  static registerLogin(result: any) {
    localStorage.setItem(configHelper.storageKeys.token, result.token);
    localStorage.setItem(configHelper.storageKeys.user, JSON.stringify(result.user));
  }
  /**
   * @return boolean
   */
  static get isLogado(): boolean {

    return (localStorage.getItem(configHelper.storageKeys.token) != undefined);

  }
}
