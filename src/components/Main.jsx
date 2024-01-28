import Editor from "./Editor";
import FlowChart from "./FlowChart";
import Nav from "./Nav";

export default function Main() {
  return (
    <main className="flex">
      <Nav />
      <Editor />
      <FlowChart />
    </main>
  );
}
