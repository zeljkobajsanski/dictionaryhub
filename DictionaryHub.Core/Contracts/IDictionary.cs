using DictionaryHub.Core.Model;

namespace DictionaryHub.Core.Contracts
{
    public interface IDictionary
    {
        SearchResult FindWord(string word);
    }
}