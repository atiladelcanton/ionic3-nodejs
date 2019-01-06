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

  async autenticate(email: string, password: string): Promise<HttpResultModel> {
    return await this.http.post(`${this.url}/auth`, { email: email, password: password });
  }
}
