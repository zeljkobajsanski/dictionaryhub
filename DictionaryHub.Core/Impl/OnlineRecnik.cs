using System.Collections.Generic;
using System.Linq;
using System.Text;
using DictionaryHub.Core.Model;
using HtmlAgilityPack;

namespace DictionaryHub.Core.Impl
{
    public class OnlineRecnik : DictionaryBase
    {
        public override SearchResult FindWord(string word)
        {
            var url = "http://onlinerecnik.com/recnik/engleski/srpski/" + word;
            var html = WebClient.Load(url);
            var node = html.DocumentNode.SelectNodes("//*[@id=\"main\" and @class=\"grid_8\"]").FirstOrDefault();
            if (node == null) return new SearchResult();
            var sb = new StringBuilder();
            var nodes = node.ChildNodes.Where(x => x.Name == "h3" || x.Name == "h4" || x.Name == "p");

            foreach (var htmlNode in nodes)
            {
                if (htmlNode.Name == "h3")
                {
                    sb.Append("<h3>").Append(htmlNode.InnerText).Append("</h3>");
                }
                if (htmlNode.Name == "p" || htmlNode.Name == "h4")
                {
                    sb.Append(htmlNode.OuterHtml);
                }
            }

            return new SearchResult()
            {
                Dictionary = "Online rečnik",
                Source = url,
                Content = sb.ToString()
            };
        }
    }
}