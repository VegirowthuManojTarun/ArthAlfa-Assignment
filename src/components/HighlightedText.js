import React from "react";

const HighlightedText = ({ text }) => {
  return (
    <div
      className="highlighted-text"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default HighlightedText;
