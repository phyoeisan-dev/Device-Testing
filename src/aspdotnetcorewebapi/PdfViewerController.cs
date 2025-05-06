using Microsoft.AspNetCore.Mvc;//pls write the code in visual studio
namespace BoldReportAspNetCore.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PdfViewerController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;

        public PdfViewerController(IWebHostEnvironment hostEnvironment)
        {
            _hostingEnvironment = hostEnvironment;
        }

        [HttpGet]
        public IActionResult GetPdf(string fileName)
        {
            string filePath = Path.Combine(_hostingEnvironment.WebRootPath, fileName);
            if (System.IO.File.Exists(filePath))
            {
                var fileBytes = System.IO.File.ReadAllBytes(filePath);
                return File(fileBytes, "application/pdf");
            }
            else
            {
                return NotFound("File not found.");
            }
        }

    }
}
