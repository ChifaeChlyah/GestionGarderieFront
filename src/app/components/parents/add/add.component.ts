import { Router } from '@angular/router';
import { HttpService } from './../../../services/http.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  userFormGroup !: FormGroup;
  constructor(

    private http :HttpService ,
    private fb : FormBuilder,
    private route:Router
  ){

  }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      nom : new FormControl('', [Validators.required ] ),
      prenom : new FormControl('', [Validators.required] ),
      cne : new FormControl('',Validators.required ),
      email : new FormControl('',Validators.required ),
      motDePasse : new FormControl('',Validators.required ),
      tel : new FormControl('',Validators.required ),

    })

  }

  save(){


    this.http.post("parent",this.userFormGroup.value).subscribe(
      (response:any)=>{
        this.route.navigate(["/get-parent"])
        console.log("done ==> ", response)
      } , (err : any )=>  {
         console.log(err);

      }
    )


    }


}
