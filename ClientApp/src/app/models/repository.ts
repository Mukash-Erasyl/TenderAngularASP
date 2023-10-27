import { TenderPost } from "./tender.model"
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TenderCreate } from "./tender-create.model";

const productsUrl = "/api/products";
const createUrl = "/api/createTenders";

@Injectable()
export class Repository {
    tender: TenderPost = new TenderPost;
    tenders: TenderPost[] = [];

    createTenders:TenderCreate[]=[];
    createTendersMat:TenderCreate[]=[];
    createTendersEq:TenderCreate[]=[];
    createTendersTo:TenderCreate[]=[];
    



    constructor(private http: HttpClient) {
        this.getTenders(true);
        this.getCreateTenders(true);
}



getTender(id: number) {
    this.http.get<TenderPost>(`${productsUrl}/${id}`)
        .subscribe(p => this.tender = p);
}

getTenders(related = false , category="" ) {

    let url = `${productsUrl}?related=${related}`;
    if (category) {
        url +=  `&category=${category}`;
    }

this.http.get<TenderPost[]>(url).subscribe(prods => this.tenders = prods);
}

getTendersBySearcher(searchText:string) {

    let url = `${productsUrl}?related=${true}`;
    if (searchText) {
        url += `&search=${searchText}`;
    }

this.http.get<TenderPost[]>(url).subscribe(prods => this.tenders = prods);
}






getCreateTenders(related = false , category="" , chooseTypeNumber = 0) {
    

//     let url = `${createUrl}?related=${related}`;
//     if (category) {
//         url +=  `&category=${category}`;
//     }

// this.http.get<TenderCreate[]>(url).subscribe(prods => this.createTenders = prods);


if(chooseTypeNumber==0){
        let url1 = `${createUrl}?related=${related}`;
        url1 +=  `&category=материалы`;
    this.http.get<TenderCreate[]>(url1).subscribe(prods => this.createTendersMat = prods);


        let url2 = `${createUrl}?related=${related}`;
        url2 +=  `&category=оборудование`;
    this.http.get<TenderCreate[]>(url2).subscribe(prods => this.createTendersEq = prods);

        let url3 = `${createUrl}?related=${related}`;
        url3 +=  `&category=инструменты`;
    this.http.get<TenderCreate[]>(url3).subscribe(prods => this.createTendersTo = prods);
}else if(chooseTypeNumber==1){
    this.createTendersEq.length=0;
    this.createTendersTo.length=0;

    let url = `${createUrl}?related=${related}`;
    url +=  `&category=материалы`;
this.http.get<TenderCreate[]>(url).subscribe(prods => this.createTendersMat = prods);
}else if(chooseTypeNumber==2){
    this.createTendersMat.length=0;
    this.createTendersTo.length=0;

    let url = `${createUrl}?related=${related}`;
    url +=  `&category=оборудование`;
this.http.get<TenderCreate[]>(url).subscribe(prods => this.createTendersEq = prods);
}else if(chooseTypeNumber==3){
    this.createTendersMat.length=0;
    this.createTendersEq.length=0;

    let url = `${createUrl}?related=${related}`;
        url +=  `&category=инструменты`;
    this.http.get<TenderCreate[]>(url).subscribe(prods => this.createTendersTo = prods);
}
}



} 