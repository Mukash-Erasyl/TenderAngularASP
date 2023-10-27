import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private repo: Repository) { }

  ngOnInit(): void {
  }

  


  tenderTypesFlags = {allResulrFlag:true ,constructionMaterialsFlag:false ,equipmentFlag:false ,toolsFlag:false  }

  tenderTypesChangeFlag = (flagId:number=0) => {
    if(flagId==1){
      this.tenderTypesFlags.allResulrFlag=true;
      this.tenderTypesFlags.constructionMaterialsFlag=false;
      this.tenderTypesFlags.equipmentFlag=false;
      this.tenderTypesFlags.toolsFlag=false;
      this.repo.getCreateTenders();

    }else  if(flagId==2){
      this.tenderTypesFlags.allResulrFlag=false;
      this.tenderTypesFlags.constructionMaterialsFlag=true;
      this.tenderTypesFlags.equipmentFlag=false;
      this.tenderTypesFlags.toolsFlag=false;
      this.repo.getCreateTenders(true,"материалы",1);
      

    }else  if(flagId==3){
      this.tenderTypesFlags.allResulrFlag=false;
      this.tenderTypesFlags.constructionMaterialsFlag=false;
      this.tenderTypesFlags.equipmentFlag=true;
      this.tenderTypesFlags.toolsFlag=false;
      this.repo.getCreateTenders(true,"оборудование",2);
      

    }else  if(flagId==4){
      this.tenderTypesFlags.allResulrFlag=false;
      this.tenderTypesFlags.constructionMaterialsFlag=false;
      this.tenderTypesFlags.equipmentFlag=false;
      this.tenderTypesFlags.toolsFlag=true;
      this.repo.getCreateTenders(true,"инструменты",3);

    }else {
      this.tenderTypesFlags.allResulrFlag=false;
      this.tenderTypesFlags.constructionMaterialsFlag=false;
      this.tenderTypesFlags.equipmentFlag=false;
      this.tenderTypesFlags.toolsFlag=false;

    }
    
  }







}
