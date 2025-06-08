import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log('Cache returned for', input)
      setResults(cache[input])
      return;
    }

    console.log("API Call", input);

    try {
      const data = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const json = await data.json();
      const apiResults = json?.recipes ?? [];
      setResults(apiResults);
      setCache((prev) => ({
        ...prev,
        [input]: apiResults,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <>
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>
      {showResults && (
        <div className="results-container">
          {results.length ? (
            <>
              {results.map((resultItem) => (
                <span key={resultItem.id} className="result">
                  {resultItem.name}
                </span>
              ))}
            </>
          ) : (
            <>
              <span className="no-results">No results found</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
