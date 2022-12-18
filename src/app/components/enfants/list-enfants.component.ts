import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import { environment } from './../../utile/environement';
import {EnfantModel} from "../../models/Enfant.model";
@Component({
  selector: 'app-list-enfants',
  templateUrl: './list-enfants.component.html',
  styleUrls: ['./list-enfants.component.css']
})
export class ListEnfantsComponent implements OnInit {
  typeEnfant:String="ENFANT_NORMAL";
  enfantFormGroup !: FormGroup;
  enfants : EnfantModel[]=[];
  parentFormGroup !: FormGroup;
  formEnfant:boolean=true;
  constructor(private httpService : HttpService ,
              private fb : FormBuilder,
    ) {

  }

  ngOnInit(): void {
      this.getEnfants();
      this.initAdd();
      this.initAddParent();
  }


  delete(id : any){
    this.enfants=this.enfants.filter((f)=> f.id !== id)
    this.httpService.authDelete("enfant/"+id).subscribe({
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
    this.enfantFormGroup=this.fb.group({
      nom : new FormControl('', [Validators.required ] ),
      prenom : new FormControl('', [Validators.required] ),
      age : new FormControl('',Validators.required ),
      parent: new FormControl('')
    })
  }
  save(){
    this.enfantFormGroup.value.parent=this.parentFormGroup.value;
    this.httpService.post("enfant/"+this.typeEnfant,this.enfantFormGroup.value).subscribe(
      (response:any)=>{
        console.log("done ==> ", response)
        this.getEnfants();
      } , (err : any )=>  {
        console.log(err);
      }
    )

    // this.httpService.post("parent",this.parentFormGroup.value).subscribe(
    //   (response:any)=>{
    //     console.log("done ==> ", response)
    //     this.getEnfants();
    //   } , (err : any )=>  {
    //     console.log(err);
    //
    //   }
    // )
    console.log(this.parentFormGroup)
  }


  initAddParent()
  {
    this.parentFormGroup=this.fb.group({
      nom : new FormControl('', [Validators.required ] ),
      prenom : new FormControl('', [Validators.required] ),
      cne : new FormControl('',Validators.required ),
      email : new FormControl('',Validators.required ),
      motDePasse : new FormControl('',Validators.required ),
      tel : new FormControl('',Validators.required ),
    });
  }
  saveParent(){
    this.httpService.post("parent",this.parentFormGroup.value).subscribe(
      (response:any)=>{
        console.log("done ==> ", response)
      } , (err : any )=>  {
        console.log(err);

      }
    )
  }
}
