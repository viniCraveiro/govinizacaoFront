import { IAbstractEntity } from "../abstract-entity";

export interface IReserve extends IAbstractEntity {
  veiculo: IAbstractEntity;
  usuario: IAbstractEntity;
  dataLocacao: Date;
  dataDevolucao: Date;
}
