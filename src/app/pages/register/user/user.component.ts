import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IClassificacao {
  value: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  classificacao: Array<string> = [
    "Administrador",
    "Motorista",
    "Operador"
  ]

  cnhList: Array<string> = ["A","B","C","D","E"]

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: this.fb.control('', Validators.required),
      cpf: this.fb.control('', Validators.required),
      senha: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
      classificacao: this.fb.control('', Validators.required),
      cnh: this.fb.control('', Validators.required)
    })
  }



}
