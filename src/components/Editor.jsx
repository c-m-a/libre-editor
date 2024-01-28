import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Editor({ code }) {
  return (
    <section className="flex h-1/2 w-full md:h-full md:w-1/2">
      <ul className="w-10 pr-2 pt-2 bg-[#282c34]">
        <li className="text-right">1</li>
        <li className="text-right">2</li>
      </ul>
      <SyntaxHighlighter
        className="w-full"
        language={code.lang}
        style={atomOneDark}
        wrapLongLines={true}
      >
        {code.text}
      </SyntaxHighlighter>
    </section>
  );
}
