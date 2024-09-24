// src/components/Statistics.js
import React from "react";

const Statistics = ({ uniqueWordsCount, characterCount }) => {
  return (
    <div className="stats">
      <p>Unique Words: {uniqueWordsCount}</p>
      <p>Character Count (Excluding Spaces and Punctuation): {characterCount}</p>
    </div>
  );
};

export default Statistics;
