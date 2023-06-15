import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReserve } from './reserve';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private http: HttpClient) { }

  createReserve(agendamento: IReserve) {
    return this.http.post('http://localhost:8080/api/v0/locacao', agendamento);
  }

  getIdReserve(id: string) {
    return this.http.get<IReserve>('http://localhost:8080/api/v0/locacao/' + id);
  }

  getAllReserve() {
    return this.http.get<Array<IReserve>>('http://localhost:8080/api/v0/locacao');
  }

}
