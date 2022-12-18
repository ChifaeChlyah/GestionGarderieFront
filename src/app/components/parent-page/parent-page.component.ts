import {Component, OnInit} from '@angular/core';
import {ParentModel} from "../../models/Parent.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {EnfantModel} from "../../models/Enfant.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DonneesPayementModel} from "../../models/donneePayement.model";
import {environment} from "../../utile/environement";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css']
})
export class ParentPageComponent implements OnInit{
    parent: ParentModel | null | undefined;
    enfant: EnfantModel | null | undefined;
    id: string | null | undefined;
  paypalFormGroup !: FormGroup;
  carteDeCreditFormGroup !: FormGroup;
  constructor(private route:ActivatedRoute,private httpService:HttpService,
  private http :HttpClient ,
  private fb : FormBuilder) {
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
    this.initPaypal();
    this.initCarteCredit();
  }
  initPaypal() {
    this.paypalFormGroup = this.fb.group({
      identifiant: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  initCarteCredit() {
    this.carteDeCreditFormGroup = this.fb.group({
      numeroCarte: new FormControl('', [Validators.required]),
      cryptogramme: new FormControl('', [Validators.required]),
    });
  }
  payerParPaypal(){
    let donneesPayement: DonneesPayementModel = new DonneesPayementModel();
    donneesPayement.identifiant=this.paypalFormGroup.value.identifiant;
    donneesPayement.password=this.paypalFormGroup.value.password;
    console.log(donneesPayement)
    // this.http.post(environment.apiUrl+"parent/payer/"+this.id+"/paypal",donneesPayement);
    this.httpService.payer(this.id,"paypal",donneesPayement).subscribe(
      result=>{
        this.httpService.getParent(this.id).subscribe(result=>
        {
          this.parent=result.body;
        })
      }
    );
  }
  payerParCarte(){
    let donneesPayement: DonneesPayementModel = new DonneesPayementModel();
    donneesPayement.identifiant=this.paypalFormGroup.value.identifiant;
    donneesPayement.password=this.paypalFormGroup.value.password;
    console.log(donneesPayement)
    // this.http.post(environment.apiUrl+"parent/payer/"+this.id+"/paypal",donneesPayement);
    this.httpService.payer(this.id,"carte",donneesPayement).subscribe(
      result=>{
        this.httpService.getParent(this.id).subscribe(result=>
        {
          this.parent=result.body;
        })
      }
    );
  }
}
