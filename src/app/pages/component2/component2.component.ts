import { Component, OnInit } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';
import { DataService } from '../../data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public convers;
  public msg: string;
  public userID: number;
  constructor(private data: DataService) {
    this.userID = 1;
  }

  ngOnInit() {
    this.convers = this.data.getMsg();
  }

  sendMsg(msg) {
    this.data.addMsg(this.userID, msg);
    this.msg='';
  }

}
