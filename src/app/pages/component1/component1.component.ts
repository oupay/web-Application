import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private router:Router)  {
    
  } 

  ngOnInit() {
  }

  name: string = '';

  setValue() { this.name = 'Nancy'; }

  goTo(a){
    this.router.navigate([a])
  }
   }

