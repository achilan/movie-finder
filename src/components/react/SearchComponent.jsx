import { useEffect, useState } from 'react';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const results_fetch = async (query) => {
    if (query.length > 0) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=7fb2f37bff2a42d8d4af1d65af218972&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await res.json();
      setResults(data.results);
      console.log(data.results);
    } else {
      setResults([]);
    }
  };

  const handleInput = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    results_fetch(searchQuery);
  };

  useEffect(() => {
    if (results.length > 0) {
      document.querySelector('.navbar-search').classList.remove('hidden');
    } else {
      document.querySelector('.navbar-search').classList.add('hidden');
    }
  }, [results]);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.id !== 'searchbar') {
        document.querySelector('.navbar-search').classList.add('hidden');
      }
    });
    }, []);

  return (
    <div className="relative">
      <input
        type="text"
        id="searchbar"
        autoComplete="off"
        className="bg-gray-800 rounded-full w-64 px-4 py-1 focus:outline-none focus:shadow-outline"
        placeholder="Search"
        onChange={handleInput}
      />
      <div
        className={`absolute bg-gray-800 text-sm rounded w-64 mt-2 navbar-search ${
          results.length > 0 ? 'block' : 'hidden'
        }`}
        style={{ zIndex: 1000 }}
      >
        {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li className="border-b border-gray-700" key={result.id}>
                <a href={result.media_type == 'movie'? '/movies/'+result.id : '/tv/'+result.id }
                onClick={() => setQuery('')} 
                className="block hover:bg-gray-700 px-3 py-3">
                  {result.title || result.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 px-3 py-2">No results found</p>
        )}
      </div>
      <button
        className="absolute right-0 top-0 mt-2 mr-2"
        onClick={() => document.getElementById('searchbar').value = ''}
      >
        <svg
          className="h-4 w-4 fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchComponent;
