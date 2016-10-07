using System.Collections.Generic;
using DictionaryHub.Core.Contracts;

namespace DictionaryHub.Core.Impl
{
    public class DictionaryCollection : IDictionaryCollection
    {
        public IEnumerable<IDictionary> GetAvailableDictionaries()
        {
            return new List<IDictionary>()
            {
                new OnlineRecnik(),
                new MerriamWebster(),
                new TheFreeDictionary()
            };
        }
    }
}