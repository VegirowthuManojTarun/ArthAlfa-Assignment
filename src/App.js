// src/App.js
import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  const [uniqueWordsCount, setUniqueWordsCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  // Function to calculate unique word count and character count
  useEffect(() => {
    const wordsArray = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(wordsArray);
    setUniqueWordsCount(uniqueWords.size);

    const charactersArray = text.replace(/[\s\W_]+/g, "");
    setCharacterCount(charactersArray.length);
  }, [text]);

  // Function to handle string replacement
  const handleReplace = () => {
    const newText = text.split(searchString).join(replaceString);
    setText(newText);
  };

  return (
    <div className="container">
      <h1>Real-Time Text Analysis and String Replacement</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />

      <div className="stats">
        <p>Unique Words: {uniqueWordsCount}</p>
        <p>Character Count (Excluding Spaces and Punctuation): {characterCount}</p>
      </div>

      <div className="replace-section">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="String to search for"
        />
        <input
          type="text"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder="String to replace with"
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
};

export default App;
