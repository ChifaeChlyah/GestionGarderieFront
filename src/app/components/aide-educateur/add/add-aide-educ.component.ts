import { Router } from '@angular/router';
import { HttpService } from './../../../services/http.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-educ',
  templateUrl: './add-aide-educ.component.html',
  styleUrls: ['./add-aide-educ.component.css']
})
export class AddAideEducComponent {
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
      email : new FormControl('',Validators.required ),
      motDePasse : new FormControl('',Validators.required ),
      telephone : new FormControl('',Validators.required ),
      salaire : new FormControl('',Validators.required ),

    })

  }

  save(){


    this.http.post("aideEducateur",this.userFormGroup.value).subscribe(
      (response:any)=>{
        this.route.navigate(["/get-aide-educateur"])
        console.log("done ==> ", response)
      } , (err : any )=>  {
         console.log(err);

      }
    )


    }

}
