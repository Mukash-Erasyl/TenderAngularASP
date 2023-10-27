export class TenderPost {
    constructor(
        public tenderId?: number,
        public tenderNumber?: number,
        public tenderDate?:Date ,
        public tenderAccessDate?:Date ,
        public tenderName?: string,
        public tenderPictUrl?: string,
        public tenderDesk?: string,
        public location?: string ,
        public tenderStartDate?: Date,
        public tenderEndDate?: Date,
        public longitude?: number ,
        public width?: number ,
        public elect?:boolean , 
        public pageFlag?:boolean , 
        public category?: string ,

        
    ){}
}




// public long TenderId { get; set; }
// public long TenderNumber {get;set;}
// public DateTime TenderDate {get;set;}
// public DateTime TenderAccessDate {get;set;}
// public string TenderName { get; set; }
// public string TenderPictUrl {get;set;}
// public string TenderDesk { get; set; }
// public string Location {get;set;}
// public DateTime TenderStartDate { get; set; }
// public DateTime TenderEndDate { get; set; }
// public string Longitude { get; set; }
// public string Width { get; set; }
// public bool Elect { get; set; } = false;
// public bool PageFlag { get; set; } = false;