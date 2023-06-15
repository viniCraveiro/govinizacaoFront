import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVeicle } from './veicle/veicle';
import { IUser } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createVeicle(veicle: IVeicle) {
    return this.http.post('http://localhost:8080/api/v0/veiculo', veicle);
  }

  getIdVeicle(id: string) {
    return this.http.get<IVeicle>('http://localhost:8080/api/v0/veiculo/' + id);
  }

  getAllVeicle() {
    return this.http.get<Array<IVeicle>>('http://localhost:8080/api/v0/veiculo');
  }

  createUser(user: IUser) {
    return this.http.post('http://localhost:8080/api/v0/usuario', user);
  }

  getIdUser(id: string) {
    return this.http.get<IUser>('http://localhost:8080/api/v0/usuario/' + id);
  }

  getAllUser() {
    return this.http.get<Array<IUser>>('http://localhost:8080/api/v0/usuario');
  }
}
