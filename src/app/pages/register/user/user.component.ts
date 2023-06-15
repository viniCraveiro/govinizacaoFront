import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { IUser } from './user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  form!: FormGroup;
  user!: IUser;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private snackBar: MatSnackBar) { }

  classificacao: Array<string> = [
    "Administrador",
    "Motorista",
    "Operador"
  ]

  cnhList: Array<string> = ["A", "B", "C", "D", "E"]

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: this.fb.control('', Validators.required),
      cpf: this.fb.control('', Validators.required),
      senha: this.fb.control('', Validators.required),
      // status: this.fb.control('', Validators.required),
      classificacao: this.fb.control('', Validators.required),
      cnh: this.fb.control('', Validators.required)
    })
  }

  getId(id: string) {
    this.registerService.getIdUser(id).subscribe({
      next: value => {
        this.user = value;
      },
      error: (er: Error) => {
        console.error(er);
      }
    })
  }

  save() {
    console.log(this.form)
    if (!this.form.valid) return;
    this.registerService.createUser(this.form.getRawValue()).subscribe({
      next: () =>
        this.snackBar.open('Cadastrado com sucesso', 'Fechar'),
      error: (er: Error) => {
        this.snackBar.open('Erro ao salvar.', 'Fechar');
      }
    })
  }



}
