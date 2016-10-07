using DictionaryHub.Core.Contracts;
using DictionaryHub.Core.Model;
using HtmlAgilityPack;

namespace DictionaryHub.Core.Impl
{
    public abstract class DictionaryBase : IDictionary
    {
        protected readonly HtmlWeb WebClient;

        protected DictionaryBase()
        {
            WebClient = new HtmlWeb();
        }

        public abstract SearchResult FindWord(string word);
    }
}