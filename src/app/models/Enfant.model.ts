import {NiveauModel} from "./Niveau.model";
import {ParentModel} from "./Parent.model";

export class EnfantModel {
  id: number | undefined;
  nom: String | undefined;
  prenom:String| undefined;
  age:number|undefined;
  niveau:NiveauModel|undefined;
  type:String|undefined;
  parent:ParentModel|undefined;
}
