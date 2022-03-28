import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { validateIdNumber } from 'south-african-id-validator';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  idvalidationService: any;
  hide: Boolean = false;
  
  ngOnInit(): void {
  }
  constructor(private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder) { }


    loginForm: FormGroup = this.fb.group({
      username: ['', [Validators.required]],
      idnumber: ['', [Validators.required, Validators.minLength(13)],],
      otp: ['', [Validators.required, Validators.minLength(3)]],
    })
  submit(){
    if (!this.loginForm.valid) {
      return;
    }
    var valID = validateIdNumber(this.loginForm.controls['idnumber'].value);
    console.log(valID)
    if(valID.valid == true) {
      this.router.navigate(['/validation']);
    }
  }


}
