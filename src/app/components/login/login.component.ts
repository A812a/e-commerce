import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean = false;
  apiError:string = ''
  isNotValid: boolean = false

  constructor(private _authService:AuthService , private _router: Router) {

    if(localStorage.getItem('userToken') != null) {
      this._router.navigate(['/home'])
    }

  }

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required ,Validators.email]),
    password: new FormControl('',[Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  })



  login(form:FormGroup) {
    console.log('hii' , form);

    if(form.valid) {
      this.isLoading = true
    this._authService.login(form.value).subscribe({
      next:(res:any) => {
        // console.log(res)
        this.isLoading = false;
        localStorage.setItem('userToken' , res.token)
        this._authService.getUserData()
        this._router.navigate(['/home'])
      },
      error:(err:any) => {
        console.log(err)
        this.apiError = err.error.errors.msg
      }
    })
    } else {
      this.isNotValid = true
    }


  }




}
