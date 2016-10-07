using System.Collections.Generic;
using DictionaryHub.Core.Model;

namespace DictionaryHub.Core.Contracts
{
    public interface ISearcher
    {
        IEnumerable<SearchResult> FindWord(string word);
    }
}