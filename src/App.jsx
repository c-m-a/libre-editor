import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const code = {
    lang: "javascript",
    text: "(num) => num + 1;",
  };

  return (
    <div className="bg-gray-500 flex md:grid md:place-items-center flex-1 h-svh shadow p-4 text-white">
      <div className="flex flex-col bg-[#3a404d] overflow-hidden rounded-md h-full w-full">
        <Header />
        <Main code={code} />
        <Footer code={code} />
      </div>
    </div>
  );
}

export default App;
