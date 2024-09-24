// src/components/ReplaceSection.js
import React, { useState } from "react";

const ReplaceSection = ({ text, setText }) => {
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");

  const handleReplace = () => {
    const newText = text.split(searchString).join(replaceString);
    setText(newText);
  };

  return (
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
  );
};

export default ReplaceSection;
