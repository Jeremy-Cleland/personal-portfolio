import Sidebar from "./components/Sidebar/";

import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-row p-8 dark:bg-darkPrimary">
      <Sidebar />
      <main className="">
        <Home />
      </main>
    </div>
  );
}

export default App;
