import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { TenderPost } from 'src/app/models/tender.model';

@Component({
  selector: 'app-find-tender-component',
  templateUrl: './find-tender-component.component.html',
  styleUrls: ['./find-tender-component.component.css']
})
export class FindTenderComponentComponent implements OnInit {

  constructor(private repo: Repository) { }





  get tender(): TenderPost {
    return this.repo.tender;
}
  get tenderBasePost(): TenderPost[] {
    return this.repo.tenders;
  }



getTenderPost = (id:number) => {
  this.repo.getTender(id);
}
  



cityValue = ""


  pageButtonsCountPost : number[] = [];

  tenderBaseCountPost = Math.ceil(this.tenderBasePost.length / 5);


  tenderBaseByPagePost:TenderPost[] = [];

  pageCounterPost = 0;



  electiveClickEventPost = (id : number)=> {
    this.tenderBasePost[id-1].elect = !this.tenderBasePost[id-1].elect;
  }


  selectFunPost = (num:number) => {
    if(num<1){
      this.pageCounterPost = 1;  
    }else if(num >= this.tenderBaseCountPost) {
      this.pageCounterPost = this.tenderBaseCountPost;  

    }
    else {
      this.pageCounterPost = num;

    }
    this.selectPageEventPost(this.pageCounterPost);
    

  }

  selectPageEventPost = (id : number ) => {
    window.scroll(0,450);
    
 



    this.tenderBaseByPagePost.length = 0;
    if(id < this.tenderBaseCountPost) {
      
      for (let index = id*5-5; index < id*5; index++) {
        this.tenderBaseByPagePost.push(this.tenderBasePost[index]);
        
        
      }
    }else if(id >= this.tenderBaseByPagePost.length) {
      for (let index = id*5-5; index < this.tenderBasePost.length; index++) {
        this.tenderBaseByPagePost.push(this.tenderBasePost[index]);
        
      }
    }
    this.tenderBasePost[id-1].pageFlag=true;

    for (let index = 0; index < this.tenderBasePost.length; index++) {
      if(index+1!=id) {
        this.tenderBasePost[index].pageFlag=false;
      }
    }

    

  }



  // setCategory=(cat:string)=> {
  //   this.repo.getTenders(true,"Пол");
  //   this.tenderBaseByPagePost.length = 0;
  //   for (let index = 0; index < this.tenderBasePost.length; index++) {
  //     this.tenderBaseByPagePost.push(this.tenderBasePost[index]);
      
      
  //   }
    
    
  // }


  findByLetter = (search:string) => {

    this.repo.getTendersBySearcher(search);
        this.tenderBaseByPagePost.length = 0;
    for (let index = 0; index < this.tenderBasePost.length; index++) {
      this.tenderBaseByPagePost.push(this.tenderBasePost[index]);
      
      
    }

  }
  

  ngOnInit(): void {
    
    // this.tenderBasePost = this.tenders;
    


    setTimeout(() => {
      this.tenderBaseCountPost = Math.ceil(this.tenderBasePost.length / 5);
      this.tenderBaseByPagePost.length = 0;
      for (let index = 0; index < this.tenderBaseCountPost; index++) {
        this.pageButtonsCountPost.push(index+1);
        
        
      }
      this.selectPageEventPost(1);
      
    }, 100);

  
    
  }
  ngDoCheck(): void {
    
    
   
  
    
  }

}
