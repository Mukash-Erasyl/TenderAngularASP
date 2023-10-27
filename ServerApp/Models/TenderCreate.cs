using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace ServerApp.Models {
    public class TenderCreate {
         public long TenderCreateId { get; set; }
         public long TenderCreateNumber { get; set; }
         public string TenderCreateUnit {get;set;}
         public string NameTenderCreations {get;set;}
         public string TenderDeskCreations {get;set;}
         public string TenderCreationsCategory {get;set;}
    }
}