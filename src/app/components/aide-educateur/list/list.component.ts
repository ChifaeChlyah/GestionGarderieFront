import { HttpService } from './../../../services/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  educateurs : any[]=[];
  educateur : any;
  constructor(private httpService : HttpService ,

    ) {

  }

  ngOnInit(): void {
      this.geteducateurs();

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
}
