using System.Linq;
using DictionaryHub.Core.Model;

namespace DictionaryHub.Core.Impl
{
    public class MerriamWebster : DictionaryBase
    {
        public override SearchResult FindWord(string word)
        {
            var url = "http://www.merriam-webster.com/dictionary/" + word;
            var html = WebClient.Load(url);
            var node = html.DocumentNode.SelectNodes("//div[@class=\"inner-box-wrapper\"]");
            if (node == null) return new SearchResult();
            return new SearchResult()
            {
                Dictionary = "Merriam Webster",
                Source = url,
                Content = node.Aggregate("", (s, htmlNode) => s + htmlNode.InnerHtml + "<br/>")
            };
        }
    }
}