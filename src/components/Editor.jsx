import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Editor() {
  const codeString = "(num) => num + 1";
  const codeExample = {
    lang: "javascript",
    code: "(num) => num + 1;",
  };

  return (
    <>
      <SyntaxHighlighter language={codeExample.lang} style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}
