import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public conver:Array<{id:number,msg:string}>
  /*= [
    {id:2,msg:"dd1"},
    {id:1,msg:"dd2"},
    {id:2,msg:"dd3"},
    {id:1,msg:"dd4"},
    {id:2,msg:"dd5"}
   ];*/

  constructor() {
    this.conver=[];
   }
 
  getMsg(){
    return this.conver;
  } 

  addMsg(userId:number,userMsg:string){
    this.conver.push({id:userId,msg:userMsg})
  }
}

interface message { 
  content:string 
  id:number 
} 