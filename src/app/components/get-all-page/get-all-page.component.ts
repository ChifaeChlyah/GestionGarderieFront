import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-page',
  templateUrl: './get-all-page.component.html',
  styleUrls: ['./get-all-page.component.css']
})
export class GetAllPageComponent implements OnInit {

  enfants : any[]=[];
  constructor(private httpService : HttpService ,

    ) {

  }

  ngOnInit(): void {
      this.getEnfants();
      // this.getParents();
      // this.getNiveaux();
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

}
