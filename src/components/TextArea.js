import React from "react";

const TextArea = ({ text, setText }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <textarea
      value={text.replace(/<[^>]+>/g, '')} 
      onChange={handleChange}
      placeholder="Type your text here..."
      className="text-area"
    />
  );
};

export default TextArea;
