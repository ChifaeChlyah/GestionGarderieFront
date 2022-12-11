import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-admin-connection',
  templateUrl: './admin-connection.component.html',
  styleUrls: ['./admin-connection.component.css']
})
export class AdminConnectionComponent {
  mode:number=0;
  constructor(private fb:FormBuilder,private authService:AuthentificationService
    ,private router:Router) { }
  loginFormGroup!:FormGroup;
  submitted: boolean | undefined;
  ngOnInit(): void {
    this.loginFormGroup=this.fb.group({
      email: ["",Validators.required],
      password: ["", Validators.required]
    });

  }
  onInputClick(){
    this.mode=0;
  }
  login() {
    this.submitted=true;
    if(this.loginFormGroup?.invalid) return;
    else{
      this.authService.loginAdmin(this.loginFormGroup.value.email,this.loginFormGroup.value.password).subscribe(
        resp=>{
            console.log(resp.body);
            if(resp.body==true)
              this.router.navigateByUrl("dashboard-admin")
            else
              this.mode=1;
        },
        error => {
          this.mode=1;
        }
      )
    }
  }
}
