import React from "react";

const Statistics = ({ uniqueWordsCount, characterCount }) => {
  return (
    <div className="stats">
      <div className="stat-item">
        <p className="stat-label">Unique Words:</p>
        <p className="stat-value">{uniqueWordsCount}</p>
      </div>
      <div className="stat-item">
        <p className="stat-label">Character Count (Excluding Spaces and Punctuation):</p>
        <p className="stat-value">{characterCount}</p>
      </div>
    </div>
  );
};

export default Statistics;
