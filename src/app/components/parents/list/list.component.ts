import { HttpService } from './../../../services/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  parents : any[]=[];
  parent : any;
  constructor(private httpService : HttpService ,

    ) {

  }

  ngOnInit(): void {
      this.getParents();

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
}
