using System.Collections.Generic;
using System.Linq;
using DictionaryHub.Core.Contracts;
using DictionaryHub.Core.Model;

namespace DictionaryHub.Core.Impl
{
    public class Searcher : ISearcher
    {
        private readonly IDictionaryCollection _dictionaryCollection;

        public Searcher(IDictionaryCollection dictionaryCollection)
        {
            _dictionaryCollection = dictionaryCollection;
        }

        public IEnumerable<SearchResult> FindWord(string word)
        {
            return _dictionaryCollection.GetAvailableDictionaries()
                                        .Select(dictionary => dictionary.FindWord(word));
        }
    }
}