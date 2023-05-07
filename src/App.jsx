import data from "./assets/data.jsx";
import Navbar from "./components/navbar/index.jsx";
import Projects from "./components/projects/Projects.jsx";

function App() {
  return (
    <div className="fixed flex min-h-screen text-midnight-100 dark:text-ocean-300">
      <Navbar />
      <main className="w-screen bg-deep-100 dark:bg-swell-1200 dark:text-ocean-300">
        <Projects projects={data.projects} />
      </main>
    </div>
  );
}

export default App;
