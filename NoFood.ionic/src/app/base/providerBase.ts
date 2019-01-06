import { HttpProvider } from './../../providers/http/http';
import { HttpResultModel } from '../models/HttpResultModel';
export abstract class ProviderBase<T>{

  constructor(
      public url: string,
      public http: HttpProvider
      ) {

  }

  get(): Promise<HttpResultModel> {
    return this.http.get(this.url);
  }

  getById(uuid: string): Promise<HttpResultModel> {
    return this.http.get(`${this.url}/${uuid}`);
  }

  post(model: T): Promise<HttpResultModel> {
    return this.http.post(this.url, model);
  }
  put(uuid: string, model: T): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/${uuid}`, model);
  }
  delete(uuid: string): Promise<HttpResultModel> {
    return this.http.delete(`${this.url}/${uuid}`);
  }
}
