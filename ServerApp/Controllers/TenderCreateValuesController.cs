using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using Microsoft.EntityFrameworkCore; 
using System.Linq;
using System.Collections.Generic;

namespace ServerApp.Controllers {
    [Route("api/createTenders")]
    [ApiController]
    public class CreateTenderValuesController : Controller {
        private DataContext context;
        public CreateTenderValuesController(DataContext ctx) {
            context = ctx;
}
        [HttpGet("{id}")]
    public TenderCreate GetCreateTender(long id) {
        //System.Threading.Thread.Sleep(5000);
        return context.TendersCreate
    .FirstOrDefault(p => p.TenderCreateId == id);
    }




        [HttpGet]
        public IEnumerable<TenderCreate> GetCreateTenders(string category="",
        bool related = false) {
            IQueryable<TenderCreate> query = context.TendersCreate;
           if (!string.IsNullOrWhiteSpace(category))
            {
                string catLower = category;
                query = query.Where(p => p.TenderCreationsCategory.Contains(catLower));
            }
            return query;
}
} }