import {EnfantModel} from "./Enfant.model";

export class ParentModel {
 id: number | undefined;
 nom: String | undefined;
 prenom:String| undefined;
 cne:String| undefined;
 email:String| undefined;
 tel:String| undefined;
 statutPayement:boolean|undefined;
 enfant:EnfantModel| undefined;

}
