using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

using Calla.Data;
using Calla.Models;

using Microsoft.AspNetCore.Mvc;

namespace Calla.Controllers
{
    public class GameController : Controller
    {
        private readonly CallaContext db;

        public GameController(CallaContext db)
        {
            this.db = db;
        }

        [HttpPost]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public async Task<IActionResult> Rooms([FromBody] string roomName)
        {
            if (roomName is null)
            {
                return Error();
            }

            var shortName = roomName.ToLowerInvariant()
                .Replace(" ", "", System.StringComparison.InvariantCulture);
            if (!db.Rooms.Any(r => r.ShortName == shortName))
            {
                await db.Rooms.AddAsync(new Rooms
                {
                    Name = roomName,
                    ShortName = shortName,
                    Visible = false
                }).ConfigureAwait(false);

                await db.SaveChangesAsync().ConfigureAwait(false);
            }

            return Content(shortName);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
