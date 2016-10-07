using System.Collections.Generic;

namespace DictionaryHub.Core.Contracts
{
    public interface IDictionaryCollection
    {
        IEnumerable<IDictionary> GetAvailableDictionaries();
    }
}