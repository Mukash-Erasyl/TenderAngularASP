import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { TenderPost } from 'src/app/models/tender.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  tenderBase = [
    {id:0 , title : "1 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    {id:1 , title : "2 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false, pageFlag : false} , 
    {id:2 , title : "3 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false, pageFlag : false} , 
    {id:3 , title : "4 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    {id:4 , title : "5 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    {id:5 , title : "6 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    {id:6 , title : "7 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    {id:7 , title : "8 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    {id:8 , title : "9 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false, pageFlag : false } , 
    {id:9 , title : "10 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    {id:10 , title : "11 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    {id:11 , title : "12 декоративной отделки " , decrib : "Цена за нанесение декоративной штукатурки (без материалов) за M2 начинается от 900 рублей и может достигать 3500 рублей. Средняя цена составляет - 1200 рублей метр квадратный." , dateStart : 1 , dateEnd : "14.05.2023" , city : "Алматы" , elect : false , pageFlag : false} , 
    
  ]


  constructor(private repo: Repository) { }


  get tender(): TenderPost {
    return this.repo.tender;
}
  get tenderBasePost(): TenderPost[] {
    return this.repo.tenders;
  }



  date1 : Date = new Date();
  date2 : Date = new Date();
  diffDate = 0;
  diffDateDays = 0;

  getTenderPost = (id:number) => {
    this.repo.getTender(id);
  }

  

  ngOnInit(): void {
    setTimeout(() => {
      this.date1 = this.tender.tenderEndDate || new Date(); 
      this.date2 = this.tender.tenderStartDate || new Date(); 
      this.diffDate = new Date(this.date1).getTime()-new Date(this.date2).getTime();
      this.diffDateDays = this.diffDate / (1000 * 60 * 60 * 24);
      
    }, 100);
    

    

    
  
  }




}
