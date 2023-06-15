import { IAbstractEntity } from "../../abstract-entity";

export interface IVeicle extends IAbstractEntity {
  placa: string,
  quilometragem: string,
  renavam: string,
  chassi: string,
  cor: string,
  ano: string,
  modelo: string,
  marca: string,
  tipoVeiculo: string,
  categoriaCnh: string,
  statusVeiculo: string,
}
