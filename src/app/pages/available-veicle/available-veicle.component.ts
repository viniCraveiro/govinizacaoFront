import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Moment } from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/yyyy',
    monthYearLabel: 'MM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'app-available-veicle',
  templateUrl: './available-veicle.component.html',
  styleUrls: ['./available-veicle.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class AvailableVeicleComponent implements OnInit {
  form!: FormGroup
  minDate: Date;
  maxDate: Date;
  constructor(private fb: FormBuilder) {
    this.minDate = new Date(Date.now() - 20, 0, 1);
    this.maxDate = new Date(Date.now() + 1, 11, 31);
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      dataLocacao: this.fb.control('', Validators.required),
      dataDevolucao: this.fb.control('', Validators.required),
    })
  }

  formatDate(date: Moment): string {
    return formatDate(date.toDate(), 'dd/MM/yyyy', 'en-US');
  }

  onDateChange(event: MatDatepickerInputEvent<Moment>) {
    const selectedDate = event.value;
    // Lógica para manipular a data selecionada
  }

}
