using System.Linq;
using DictionaryHub.Core.Model;

namespace DictionaryHub.Core.Impl
{
    public class TheFreeDictionary : DictionaryBase
    {
        public override SearchResult FindWord(string word)
        {
            var url = "http://www.thefreedictionary.com/" + word;
            var html = WebClient.Load(url);
            var node = html.DocumentNode.SelectSingleNode("//div[@id=\"MainTxt\"]");
            if (node == null) return new SearchResult();
            return new SearchResult()
            {
                Dictionary = "The Free Dictionary",
                Source = url,
                Content = node.InnerHtml
            };
        }
    }
}