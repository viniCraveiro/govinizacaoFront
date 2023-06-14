import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createVeicle(veicle: unknown) {
    return this.http.post('http://localhost:8080/api/v0/veiculo', veicle);
  }

  createUser(user: unknown) {
    return this.http.post('http://localhost:8080/api/v0/usuario', user);
  }
}
