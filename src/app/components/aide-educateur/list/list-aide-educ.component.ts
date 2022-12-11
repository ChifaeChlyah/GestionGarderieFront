import { HttpService } from './../../../services/http.service';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-aide-educ',
  templateUrl: './list-aide-educ.component.html',
  styleUrls: ['./list-aide-educ.component.css']
})
export class ListAideEducComponent {
  educateurs : any[]=[];
  userFormGroup !: FormGroup;
  educateur : any;
  constructor(private httpService : HttpService ,
              private http :HttpService ,
              private fb : FormBuilder,
              private route:Router
    ) {

  }

  ngOnInit(): void {
      this.geteducateurs();
      this.initAdd();
  }

  geteducateurById(data : any){
    this.httpService.authGet("aideEducateur/"+data).subscribe({
      next : (res: any)=>{
        this.educateur=res.body;
        console.log(this.educateur);
      }
    })
  }

  delete(id : any){
    this.educateurs=this.educateurs.filter((f)=> f.id !== id)
    this.httpService.authDelete("aideEducateur/"+id).subscribe({
      next : (data : any)=>{
      }
    })
  }


  geteducateurs(){
    this.httpService.authGet("aideEducateur")
      .subscribe({
        next: (data: any) => {

           this.educateurs= data.body;
           console.log(this.educateurs)
        },
        error: error => console.log(error)
      });
  }
  initAdd() {
    this.userFormGroup = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      motDePasse: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      salaire: new FormControl('', Validators.required),
    });
  }
  save(){
    this.http.post("aideEducateur",this.userFormGroup.value).subscribe(
      (response:any)=>{
        this.geteducateurs();
        console.log("done ==> ", response)
      } , (err : any )=>  {
        console.log(err);
      }
    )
  }

}
