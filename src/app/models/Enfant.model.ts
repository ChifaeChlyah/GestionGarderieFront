import {NiveauModel} from "./Niveau.model";

export class EnfantModel {
  id: number | undefined;
  nom: String | undefined;
  prenom:String| undefined;
  age:number|undefined;
  niveau:NiveauModel|undefined;
}
