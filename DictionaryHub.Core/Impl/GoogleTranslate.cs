using System.Linq;
using DictionaryHub.Core.Model;

namespace DictionaryHub.Core.Impl
{
    public class GoogleTranslate : DictionaryBase
    {
        public override SearchResult FindWord(string word)
        {
            var url = "https://translate.google.com/#en/sr/" + word;
            var html = WebClient.Load(url);
            var node = html.DocumentNode.SelectSingleNode("//*[@class=\"gt-cd gt-cd-bd gt-cd-baf\"]");
            //var node = html.DocumentNode.SelectSingleNode("//div[@id=\"gt-main\"]");
            if (node == null) return new SearchResult();
            return new SearchResult()
            {
                Dictionary = "Google Translate",
                Source = url,
                Content = node.InnerHtml
            };
        }
    }
}