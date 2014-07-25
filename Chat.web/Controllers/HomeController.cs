using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;

namespace Chat.web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            
            ViewBag.Title = "Chat";

            return View();
        }
        public ActionResult userView()
        {
            ViewBag.Title = "Admin";
            return View();
        }
    }
}
