import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {ParentModel} from "../../../models/Parent.model";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
  nbParents!:number | undefined;
  nbEnfants!:number | undefined;
  nbAideEduc!:number | undefined;
  nbActivites!:number | undefined;
  constructor(private httpService:HttpService) {

  }
  ngOnInit(): void {
    this.httpService.getActivite().subscribe(
      result=>{
        this.nbActivites=result.body?.length;
      }
    )
    this.httpService.getParents().subscribe(
      result=>{
        this.nbParents=result.body?.length;
      }
    )
    this.httpService.getEnfant().subscribe(
      result=>{
        this.nbEnfants=result.body?.length;
      }
    )
    this.httpService.getAideEuc().subscribe(
      result=>{
        this.nbAideEduc=result.body?.length;
      }
    )
  }

}
