import {Component, OnInit} from '@angular/core';
import {ParentModel} from "../../models/Parent.model";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {EnfantModel} from "../../models/Enfant.model";

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css']
})
export class ParentPageComponent implements OnInit{
    parent: ParentModel | null | undefined;
    enfant: EnfantModel | null | undefined;
    id: string | null | undefined;
  constructor(private route:ActivatedRoute,private httpService:HttpService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpService.getParent(this.id).subscribe(result=>
    {
      this.parent=result.body;
    })
    this.httpService.getEnfantByParentId(this.id).subscribe(result=>
    {
      this.enfant=result.body;
    })
  }
}
