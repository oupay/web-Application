import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  
  public convers;
  public msg: string;
  public userID: number;
  constructor(private data: DataService) {
    this.userID = 2;
  }

  ngOnInit() {
    this.convers = this.data.getMsg();
  }

  sendMsg(msg) {
    this.data.addMsg(this.userID, msg);
    this.msg='';
  }

}