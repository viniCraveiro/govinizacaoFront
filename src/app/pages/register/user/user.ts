import { IAbstractEntity } from "../../abstract-entity"

export interface IUser extends IAbstractEntity {
  nome: string
  cpf: string
  senha: string
  status: string
  classificacao: string
  cnh: Array<string>
}

