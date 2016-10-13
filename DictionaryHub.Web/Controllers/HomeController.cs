using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using DictionaryHub.Core.Contracts;
using DictionaryHub.Core.Impl;

namespace DictionaryHub.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ISearcher _searcher;

        public HomeController()
        {
            _searcher = new Searcher(new DictionaryCollection());
        }

        public HomeController(ISearcher searcher)
        {
            _searcher = searcher;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FindWord(string word)
        {
            var results = _searcher.FindWord(word);
            return Json(results, JsonRequestBehavior.AllowGet);
        }

        [Authorize]
        public void Test()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            
        }
    }
}