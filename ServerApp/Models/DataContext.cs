using Microsoft.EntityFrameworkCore;
namespace ServerApp.Models {
    public class DataContext : DbContext {
        public DataContext(DbContextOptions<DataContext> opts)
            : base(opts) { }
        public DbSet<Tender> Tenders { get; set; }
        public DbSet<TenderCreate> TendersCreate { get; set; }
       
} }