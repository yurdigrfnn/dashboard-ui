import React, { useState } from "react";
import "./styles.css";
import Editor from "react-simple-code-editor";
import { highlight, languages} from "prismjs/components/prism-core";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-sql";

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");

export default function Edit({code}) {
  const [value, setValue] = useState(code);  

  return (
    <Editor
      value={value}
      onValueChange={code => setValue(code)}
      highlight={code => hightlightWithLineNumbers(code, languages.sql)}
      padding={10}
      textareaId="codeArea"
      className="editor"
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        backgroundColor: "#282c34",
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 16,
        outline: 0,
        border: 0,
      }}
    />
  );
}

