import { HttpService } from './../../../services/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  parents : any[]=[];
  constructor(private httpService : HttpService ,

    ) {

  }

  ngOnInit(): void {
      this.getParents();

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
