import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoading:boolean = false;
  apiError:string = ''
  isNotValid: boolean = false

  constructor(private _authService:AuthService , private _router: Router) {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    password: new FormControl('',[Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl('',[Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone: new FormControl('',[Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)])
  }
  // ,
  // {
  //   validators: this.validateRePassword
  // }
  )

  // validateRePassword(registerForm:any) {
  //   let passwordControl = this.registerForm.get('password')
  //   let rePasswordControl = this.registerForm.get('rePassword')

  //   if(passwordControl.value == rePasswordControl.value) {
  //     return null
  //   } else {
  //     rePasswordControl?.setErrors({rePasswordNotPassword : 'password and rePassword should be matched'})
  //     return {rePasswordNotMatch : 'password and rePassword should be matched'}
  //   }
  // }



  register(form:FormGroup) {
    console.log('hii' , form);

    if(form.valid) {
      this.isLoading = true
    this._authService.register(form.value).subscribe({
      next:(res:any) => {
        console.log(res)
        this.isLoading = false;
        this._router.navigate(['/login'])
      },
      error:(err:any) => {
        this.isLoading = false;
        this.apiError = err.error.errors.msg
      }
    })
    } else {
      this.isNotValid = true
    }


  }




}



