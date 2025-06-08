import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const json = await data.json();
      setResults(json?.recipes ?? []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
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
        />
      </div>
      <div className="results-container">
        {results.map((resultItem) => (
          <span key={resultItem.id} className="result">
            {resultItem.name}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
