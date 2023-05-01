import TypeA from "./components/Sidebar/";

import Home from "./components/Home";

function App() {
  return (
    <div className=" flex h-screen bg-white p-6 dark:bg-[#121212]">
      <Sidebar />
      <main className=" ml-16 flex  md:ml-36">
        <Home />
      </main>
    </div>
  );
}

export default App;
