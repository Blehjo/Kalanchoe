using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KalanchoeAI.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Mvc.RazorPages;
//using Microsoft.EntityFrameworkCore;
//using RazorPagesBlehNmah.Data;
//using RazorPagesBlehNmah.Models;

//namespace RazorPagesBlehNmah.Pages.Paintings
//{
//    public class IndexModel : PageModel
//    {
//        private readonly RazorPagesBlehNmah.Data.RazorPagesGalleryContext _context;

//        public IndexModel(RazorPagesBlehNmah.Data.RazorPagesGalleryContext context)
//        {
//            _context = context;
//        }

//        public IList<Painting> Painting { get; set; } = default!;

//        public async Task OnGetAsync()
//        {
//            if (_context.Painting != null)
//            {
//                Painting = await _context.Painting
//                .Include(p => p.Collection).ToListAsync();
//            }
//        }
//    }
//}


//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.EntityFrameworkCore;
//using RazorPagesBlehNmah.Models;

//namespace RazorPagesBlehNmah.Data;

//public class RazorPagesGalleryContext : DbContext
//{
//    public RazorPagesGalleryContext(DbContextOptions<RazorPagesGalleryContext> options)
//        : base(options)
//    {
//    }

//    public DbSet<RazorPagesBlehNmah.Models.Collection> Collection { get; set; } = default!;
//    public DbSet<RazorPagesBlehNmah.Models.Painting> Painting { get; set; } = default!;
//    public DbSet<RazorPagesBlehNmah.Models.Photograph> Photograph { get; set; } = default!;
//}
