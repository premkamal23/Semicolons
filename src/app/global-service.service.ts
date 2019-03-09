import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
selectedRecord:any;
public islogin:boolean;
  constructor() { 
    this.islogin=false;
  }


}
