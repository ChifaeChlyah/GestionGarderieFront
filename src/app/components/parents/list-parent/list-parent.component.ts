import { HttpService } from './../../../services/http.service';
import { Component } from '@angular/core';
import {AddComponent} from "../add-parent/add.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-parents',
  templateUrl: './list-parents.component.html',
  styleUrls: ['./list-parent.component.css']
})
export class ListParentComponent {
  userFormGroup !: FormGroup;
  parents : any[]=[];
  parent : any;
  constructor(private httpService : HttpService ,
              private http :HttpService ,
              private fb : FormBuilder,
              private route:Router
  ) {

  }

  ngOnInit(): void {
      this.getParents();
      this.initAdd();
  }

  getParentById(data : any){
    this.httpService.authGet("parent/"+data).subscribe({
      next : (res: any)=>{
        this.parent=res.body;
        console.log(this.parent);
      }
    })
  }

  delete(id : any){
    this.parents=this.parents.filter((f)=> f.id !== id)
    this.httpService.authDelete("parent/"+id).subscribe({
      next : (data : any)=>{
      }
    })
  }


  getParents(){
    this.httpService.authGet("parent")
      .subscribe({
        next: (data: any) => {

           this.parents= data.body;
           console.log(this.parents)
        },
        error: error => console.log(error)
      });


  }



  initAdd()
  {
    this.userFormGroup=this.fb.group({
      nom : new FormControl('', [Validators.required ] ),
      prenom : new FormControl('', [Validators.required] ),
      cne : new FormControl('',Validators.required ),
      email : new FormControl('',Validators.required ),
      motDePasse : new FormControl('',Validators.required ),
      tel : new FormControl('',Validators.required ),

    });
  }
  save(){
    this.http.post("parent",this.userFormGroup.value).subscribe(
      (response:any)=>{
        this.route.navigate(["/get-parent"])
        console.log("done ==> ", response)
        this.getParents();
      } , (err : any )=>  {
        console.log(err);

      }
    )
  }
}
