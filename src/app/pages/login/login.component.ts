import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

export default interface ILogin {
  cpf: string,
  senha: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: ILogin = { cpf: '', senha: '' };
  logado: boolean = false;
  formLogin!: FormGroup;


  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      cpf: this.formBuilder.control({ value: '', disabled: false }, [Validators.required]),
      senha: this.formBuilder.control({ value: '', disabled: false }, [Validators.required]),
    })
  }

  logar() {
    this.loginService.login(this.formLogin.getRawValue()).subscribe({
      next: value => {
        this.logado = value;
        if (!this.formLogin.errors && this.logado === true) {
          this.router.navigate(['/home']);
        } else {
          console.log('Usuario ou senha incorreto !');
        }
        console.log(value);
        console.log(this.login);
      },
      error: (er: Error) => {
        console.log(er);
      }
    })
  }

}
