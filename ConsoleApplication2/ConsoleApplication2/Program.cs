using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Program
    {
        static void Main(string[] args)

        {

            string tenant = "https://m365x753612.sharepoint.com/";

            string userName = "admin@M365x753612.onmicrosoft.com";

            string passwordString = "videepth@2805";

            TestConnect(tenant, userName, passwordString);

        }

        private static void TestConnect(string tenant, string userName, string passwordString)
        {
            using (var ctx = new ClientContext(tenant))
            {
                var passWord = new SecureString();

                foreach (char c in passwordString.ToCharArray()) passWord.AppendChar(c);

                ctx.Credentials = new SharePointOnlineCredentials(userName, passWord);
                
                Web web = ctx.Web;
                ctx.Load(web);

                ctx.ExecuteQuery();

                Console.WriteLine(string.Format("Connected to site with title of {0}", web.Title));

                Console.ReadLine();

                //Get my list

                CamlQuery query = new CamlQuery();

                List myList = web.Lists.GetByTitle("ExpertRating");
                ListItemCollection kundeItems = myList.GetItems(query);

                ctx.Load<List>(myList);
                ctx.Load<ListItemCollection>(kundeItems);
                ctx.ExecuteQuery();

                Console.WriteLine("Getting list items");

                foreach (var spItem in kundeItems)

                {

                    string title = (string)spItem["Title"];

                    Console.WriteLine(title);

                }

                Console.ReadLine();

            }
        }
    }
}