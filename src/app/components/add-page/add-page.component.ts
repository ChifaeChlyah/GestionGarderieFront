import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit{
    userFormGroup !: FormGroup;
  constructor(

    private http :HttpService ,
    private fb : FormBuilder,
  ){

  }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      nom : new FormControl('', [Validators.required ] ),
      prenom : new FormControl('', [Validators.required] ),
      age : new FormControl('',Validators.required ),

    })

  }

  save(){


    this.http.post("enfant/ENFANT_NORMAL",this.userFormGroup.value).subscribe(
      (response:any)=>{
        console.log("done ==> ", response)
      } , (err : any )=>  {
         console.log(err);
      }
    )


    }


}
