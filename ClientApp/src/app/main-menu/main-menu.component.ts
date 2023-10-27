import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @ViewChild('video') video: ElementRef; // Выводит ошибку "Свойство "video" не имеет инициализатора, и ему не гарантировано присваивание в конструкторе."

  constructor() {
    this.video = {} as ElementRef; // Написал чтобы решить проблему описанную выше `
  }





  purchClickFlag = false;
  menuClickFlag = false;
  createClickFlag = false;
  findClickFlag = false;
  myTenderClickFlag = false;
  logClickFlag = false;
  favClickFlag = false;
  menuItemFlag= true;



  ngOnInit(): void {

  } 


  purchClickEvent = ()=> {
    this.purchClickFlag = !this.purchClickFlag;

    if(this.createClickFlag == true) {
      this.createClickFlag = false;

    }
    if(this.menuClickFlag == true) {
      this.menuClickFlag = false;

    }
    if(this.findClickFlag == true) {
      this.findClickFlag = false;

    }
    if(this.myTenderClickFlag == true) {
      this.myTenderClickFlag = false;

    }
    if(this.logClickFlag == true) {
      this.logClickFlag = false;

    }
    if(this.favClickFlag == true) {
      this.favClickFlag = false;

    }
  }


  menuClickEvent = ()=> {
    this.menuClickFlag = !this.menuClickFlag;
    this.menuItemFlag = !this.menuItemFlag;
    if(this.createClickFlag == true) {
      this.createClickFlag = false;

    }
    if(this.purchClickFlag == true) {
      this.purchClickFlag = false;

    }
    if(this.findClickFlag == true) {
      this.findClickFlag = false;

    }
    if(this.myTenderClickFlag == true) {
      this.myTenderClickFlag = false;

    }
    if(this.logClickFlag == true) {
      this.logClickFlag = false;

    }
    if(this.favClickFlag == true) {
      this.favClickFlag = false;

    }
  }
  createClickEvent = ()=> {
    this.createClickFlag = !this.createClickFlag;
    if(this.menuClickFlag == true) {
      this.menuClickFlag = false;

    }
    if(this.purchClickFlag == true) {
      this.purchClickFlag = false;

    }
    if(this.findClickFlag == true) {
      this.findClickFlag = false;

    }
    if(this.myTenderClickFlag == true) {
      this.myTenderClickFlag = false;

    }
    if(this.logClickFlag == true) {
      this.logClickFlag = false;

    }
    if(this.favClickFlag == true) {
      this.favClickFlag = false;

    }
  }
  findClickEvent = ()=> {
    this.findClickFlag = !this.findClickFlag;
    if(this.createClickFlag == true) {
      this.createClickFlag = false;

    }
    if(this.menuClickFlag == true) {
      this.menuClickFlag = false;

    }
    if(this.purchClickFlag == true) {
      this.purchClickFlag = false;

    }
    if(this.myTenderClickFlag == true) {
      this.myTenderClickFlag = false;

    }
    if(this.logClickFlag == true) {
      this.logClickFlag = false;

    }
    if(this.favClickFlag == true) {
      this.favClickFlag = false;

    }
  }
  myTenderClickEvent = ()=> {
    this.myTenderClickFlag = !this.myTenderClickFlag;
    if(this.createClickFlag == true) {
      this.createClickFlag = false;

    }
    if(this.menuClickFlag == true) {
      this.menuClickFlag = false;

    }
    if(this.findClickFlag == true) {
      this.findClickFlag = false;

    }
    if(this.purchClickFlag == true) {
      this.purchClickFlag = false;

    }
    if(this.logClickFlag == true) {
      this.logClickFlag = false;

    }
    if(this.favClickFlag == true) {
      this.favClickFlag = false;

    }
  }
  logClickEvent = ()=> {
    this.logClickFlag = !this.logClickFlag;
    if(this.createClickFlag == true) {
      this.createClickFlag = false;

    }
    if(this.menuClickFlag == true) {
      this.menuClickFlag = false;

    }
    if(this.findClickFlag == true) {
      this.findClickFlag = false;

    }
    if(this.myTenderClickFlag == true) {
      this.myTenderClickFlag = false;

    }
    if(this.purchClickFlag == true) {
      this.purchClickFlag = false;

    }
    if(this.favClickFlag == true) {
      this.favClickFlag = false;

    }
  }
  favClickEvent = ()=> {
    this.favClickFlag = !this.favClickFlag;
    if(this.createClickFlag == true) {
      this.createClickFlag = false;

    }
    if(this.menuClickFlag == true) {
      this.menuClickFlag = false;

    }
    if(this.findClickFlag == true) {
      this.findClickFlag = false;

    }
    if(this.myTenderClickFlag == true) {
      this.myTenderClickFlag = false;

    }
    if(this.logClickFlag == true) {
      this.logClickFlag = false;

    }
    if(this.purchClickFlag == true) {
      this.purchClickFlag = false;

    }
  }

  closeBackWindow = () => {
    if(this.menuItemFlag == false && this.menuClickFlag == false){
      this.menuItemFlag = true;
      

      
    }
  

  }
 

}
