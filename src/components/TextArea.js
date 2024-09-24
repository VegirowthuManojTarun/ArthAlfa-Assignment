// src/components/TextArea.js
import React from "react";

const TextArea = ({ text, setText }) => {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type your text here..."
    />
  );
};

export default TextArea;
