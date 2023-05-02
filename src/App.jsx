import Sidebar from "./components/Sidebar/";
import data from "./assets/data.jsx";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="bg-gray-100 flex min-h-screen px-3 py-10 dark:bg-darkPrimary dark:text-darkTextPrimary sm:px-5">
      <Sidebar />
      <main className="center m-auto flex min-h-screen w-1/2 flex-col justify-center px-3 py-10 dark:text-darkTextPrimary">
        <Projects projects={data.projects} />
      </main>
    </div>
  );
}

export default App;
