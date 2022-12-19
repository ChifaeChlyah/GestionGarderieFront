import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-activitie',
  templateUrl: './activitie.component.html',
  styleUrls: ['./activitie.component.css']
})
export class ActivitieComponent {

  activitieFormGroup !: FormGroup;
  activities : any[]=[];

  formEnfant:boolean=true;
  constructor(private httpService : HttpService ,
              private fb : FormBuilder,
    ) {

  }

  ngOnInit(): void {
       this.initAdd();
      this.getActivities();


  }


  delete(id : any){
    this.activities=this.activities.filter((f)=> f.id !== id)
    this.httpService.authDelete("activite/"+id).subscribe({
      next : (data : any)=>{

      }
    })
  }


  getActivities(){
    this.httpService.authGet("activite")
      .subscribe({
        next: (data: any) => {

           this.activities= data.body;
           console.log(this.activities)
        },
        error: error => console.log(error)
      });
  }



  initAdd()
  {
    this.activitieFormGroup=this.fb.group({
      nom : new FormControl('', [Validators.required ] ),
      description : new FormControl('', [Validators.required] ),
      prix : new FormControl('',Validators.required ),

    })
  }




  save(){

    this.httpService.post("activite",this.activitieFormGroup.value).subscribe(
      (response:any)=>{
        console.log("done ==> ", response)
        this.getActivities();
      } , (err : any )=>  {
        console.log(err);
      }
    )



  }




}
