import { Component } from '@angular/core';
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

  login: ILogin = { cpf: '1010', senha: '12345' };
  public logado: boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.logar()
  }

  logar() {
    this.loginService.login(this.login).subscribe({
      next: value => {
        this.logado = value;
        console.log(value);
        console.log(this.login);

      }
    })
  }

}
