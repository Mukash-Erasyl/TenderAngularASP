using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using Microsoft.EntityFrameworkCore; 
using System.Linq;
using System.Collections.Generic;

namespace ServerApp.Controllers {
    [Route("api/products")]
    [ApiController]
    public class ProductValuesController : Controller {
        private DataContext context;
        public ProductValuesController(DataContext ctx) {
            context = ctx;
}
        [HttpGet("{id}")]
    public Tender GetTender(long id) {
        //System.Threading.Thread.Sleep(5000);
        return context.Tenders
    .FirstOrDefault(p => p.TenderId == id);
    }


//         [HttpGet]
//         public IEnumerable<Tender> GetTenders(bool related = false) {
//             IQueryable<Tender> query = context.Tenders;
//             return query;
// //             if (related) {
// //                 // query = query.Include(p => p.Supplier).Include(p => p.Ratings);
// //                 List<Tender> data = query.ToList();
// //                 data.ForEach(p => {
// //                     if (p.Supplier != null) {
// //                         p.Supplier.Products = null;
// //                     }
// //                     if (p.Ratings != null) {
// //                         p.Ratings.ForEach(r => r.Product = null);
// //                     }
// // });
// //                 return data;
// //             } else {
// //                 return query;
// //             }
// }


        [HttpGet]
        public IEnumerable<Tender> GetTenders(string category="", string search="",
        bool related = false) {
            IQueryable<Tender> query = context.Tenders;
           if (!string.IsNullOrWhiteSpace(category))
            {
                string catLower = category;
                query = query.Where(p => p.Category.Contains(catLower));
            }
     if (!string.IsNullOrWhiteSpace(search))
            {
                string searchLower = search;
                query = query.Where(p => p.TenderName.Contains(searchLower)
                    || p.TenderDesk.Contains(searchLower));
            }
            return query;
}
} }