namespace Chat.Data.Migrations
{
    using Chat.Data.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Chat.Data.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Chat.Data.ApplicationDbContext context)
        {
            //Helps us keep track of the roles in the Database
            var RoleStore = new RoleStore<IdentityRole>(context);
            var RoleManager = new RoleManager<IdentityRole>(RoleStore);
            //Establish Roles
            //If AdminRole doesn't exist, go ahead and add it
            if (RoleManager.RoleExists("Admin"))
            {
                var Role = new IdentityRole();
                Role.Name = "Admin";
                RoleManager.Create(Role);
            }
            //If UserRole doesn't exist, go ahead and add it
            if (RoleManager.RoleExists("User"))
            {
                var Role = new IdentityRole();
                Role.Name = "User";
                RoleManager.Create(Role);
            }

            var UserStore = new UserStore<ApplicationUser>(context);
            var UserManager = new UserManager<ApplicationUser>(UserStore);

            if(!context.Users.Any(u => u.UserName == "Admin"))
            {
                ApplicationUser User = new ApplicationUser();
                User.UserName = "Admin";
                UserManager.Create(User, "123456");
                UserManager.AddToRole(User.Id, "Admin");

            }

            if(!context.Users.Any(u => u.UserName == "CandyMan"))
            {
                ApplicationUser User = new ApplicationUser();
                User.UserName = "CandyMan";
                UserManager.Create(User, "CandyMan1");
                //Add to role is the user role, not my userName
                UserManager.AddToRole(User.Id, "User");
            }

            if (!context.Users.Any(u => u.UserName == "Josh"))
            {
                ApplicationUser User = new ApplicationUser();
                User.UserName = "Josh";
                UserManager.Create(User, "123456");
                UserManager.AddToRole(User.Id, "Admin");

            }
            if (!context.Users.Any(u => u.UserName == "brownlee.joshua@yahoo.com"))
            {
                ApplicationUser User = new ApplicationUser();
                User.UserName = "brownlee.joshua@yahoo.com";
                UserManager.Create(User, "LoveHate1!");
                UserManager.AddToRole(User.Id, "Admin");

            }
        }
    }
}
