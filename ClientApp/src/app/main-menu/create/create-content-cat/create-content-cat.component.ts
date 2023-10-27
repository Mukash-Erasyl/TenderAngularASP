import { Component, OnInit , Input } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { TenderCreate } from 'src/app/models/tender-create.model';
import { CreateComponent } from '../create.component';

@Component({
  selector: 'app-create-content-cat',
  templateUrl: './create-content-cat.component.html',
  styleUrls: ['./create-content-cat.component.css']
})
export class CreateContentCatComponent implements OnInit {

  constructor(private repo: Repository) { }


  createContentCounter = 0;



  get tenderCreateBase(): TenderCreate[] {
    return this.repo.createTenders;
  }
  get tenderCreateBaseMat(): TenderCreate[] {
    return this.repo.createTendersMat;
  }
  get tenderCreateBaseEq(): TenderCreate[] {
    return this.repo.createTendersEq;
  }
  get tenderCreateBaseTo(): TenderCreate[] {
    return this.repo.createTendersTo;
  }





  ngOnInit(): void {
    
  }

}
