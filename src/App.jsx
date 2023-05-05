import data from "./assets/data.jsx";
// import Home from "./components/Home";
import Navbar from "./components/navbar";
import Projects from "./components/projects/Projects";
// import ProfileCard from "./components/profile/ProfileCard";

function App() {
  return (
    <div className="flex min-h-screen text-midnight-100 dark:bg-swell-950 dark:text-ocean-300">
      <Navbar />
      <main className="m-auto flex min-h-screen w-full justify-center bg-deep-100 dark:bg-swell-950 dark:text-ocean-300">
        <Projects projects={data.projects} />
      </main>
    </div>
  );
}

export default App;
