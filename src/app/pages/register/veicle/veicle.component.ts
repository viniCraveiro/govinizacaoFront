import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veicle',
  templateUrl: './veicle.component.html',
  styleUrls: ['./veicle.component.scss']
})
export class VeicleComponent implements OnInit {
  form!: FormGroup;
  cnhList: Array<string> = ["A","B","C","D","E"]
  status: Array<string> = ["Disponivel","Alugado","Manutenção","Bloqueado"]

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      placa: this.fb.control('', Validators.required),
      quilometragem: this.fb.control('', Validators.required),
      renavam: this.fb.control('', Validators.required),
      chassi: this.fb.control('', Validators.required),
      cor: this.fb.control('', Validators.required),
      ano: this.fb.control('', Validators.required),
      modelo: this.fb.control('', Validators.required),
      marca: this.fb.control('', Validators.required),
      tipoVeiculo: this.fb.control('', Validators.required),
      categoriaCnh: this.fb.control('', Validators.required),
      statusVeiculo: this.fb.control('', Validators.required),
    })
  }



}
