import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parent-connection',
  templateUrl: './parent-connection.component.html',
  styleUrls: ['./parent-connection.component.css']
})
export class ParentConnectionComponent {
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
      this.authService.loginParent(this.loginFormGroup.value.email,this.loginFormGroup.value.password).subscribe(
        resp=>{
          console.log(resp.body);
          if(resp.body)
            this.router.navigateByUrl("parent-page/"+resp.body)
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
