import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVeicle } from '../register/veicle/veicle';

@Injectable({
  providedIn: 'root'
})
export class AvailableVeicleService {

  constructor(private http: HttpClient) { }

  getVeicleDisponible() {
    return this.http.get<Array<IVeicle>>('http://localhost:8080/api/v0/veiculo/disponivel');
  }
}
