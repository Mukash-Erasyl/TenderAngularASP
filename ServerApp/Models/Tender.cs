using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace ServerApp.Models {
    public class Tender {
      public long TenderId { get; set; }
      public long TenderNumber {get;set;}
      public DateTime TenderDate {get;set;}
      public DateTime TenderAccessDate {get;set;}
      public string TenderName { get; set; }
      public string TenderPictUrl {get;set;}
      public string TenderDesk { get; set; }
      public string Location {get;set;}
      public DateTime TenderStartDate { get; set; }
      public DateTime TenderEndDate { get; set; }
      public double Longitude { get; set; }
      public double Width { get; set; }
      public bool Elect { get; set; } = false;
      public bool PageFlag { get; set; } = false;
      public string Category {get;set;}







    }
}