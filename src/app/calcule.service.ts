import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculeService {

  constructor() { }
getStat( list : any , params :string , condi : any ){
  let nb : number = 0;
  for (let i in list){
    if (list[i][params] == condi){
      nb++;
    }

  }
return nb;
}

}
