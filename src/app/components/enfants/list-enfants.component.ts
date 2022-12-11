import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-enfants',
  templateUrl: './list-enfants.component.html',
  styleUrls: ['./list-enfants.component.css']
})
export class ListEnfantsComponent implements OnInit {
  userFormGroup !: FormGroup;
  enfants : any[]=[];
  constructor(private httpService : HttpService ,
              private fb : FormBuilder,
    ) {

  }

  ngOnInit(): void {
      this.getEnfants();
      this.initAdd();
  }


  delete(id : any){
    this.enfants=this.enfants.filter((f)=> f.id !== id)
    this.httpService.authDelete("parent/"+id).subscribe({
      next : (data : any)=>{
      }
    })
  }


  getEnfants(){
    this.httpService.authGet("enfant")
      .subscribe({
        next: (data: any) => {

           this.enfants= data.body;
           console.log(this.enfants)
        },
        error: error => console.log(error)
      });
  }
  initAdd()
  {
    this.userFormGroup=this.fb.group({
      nom : new FormControl('', [Validators.required ] ),
      prenom : new FormControl('', [Validators.required] ),
      age : new FormControl('',Validators.required ),

    })
  }
  save(){
    this.httpService.post("enfant/ENFANT_NORMAL",this.userFormGroup.value).subscribe(
      (response:any)=>{
        console.log("done ==> ", response)
        this.getEnfants();
      } , (err : any )=>  {
        console.log(err);
      }
    )
  }

}
