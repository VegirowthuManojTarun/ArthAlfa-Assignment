// src/App.js
import React, { useState, useEffect } from "react";
import TextArea from "./components/TextArea";
import Statistics from "./components/Statistics";
import ReplaceSection from "./components/ReplaceSection";
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [uniqueWordsCount, setUniqueWordsCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    const wordsArray = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(wordsArray);
    setUniqueWordsCount(uniqueWords.size);

    const charactersArray = text.replace(/[\s\W_]+/g, "");
    setCharacterCount(charactersArray.length);
  }, [text]);

  return (
    <div className="container">
      <h1>Real-Time Text Analysis and String Replacement</h1>
      <TextArea text={text} setText={setText} />
      <Statistics uniqueWordsCount={uniqueWordsCount} characterCount={characterCount} />
      <ReplaceSection text={text} setText={setText} />
    </div>
  );
};

export default App;
