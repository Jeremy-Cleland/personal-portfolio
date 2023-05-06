import data from "./assets/data.jsx";
// import Home from "./components/Home";
import Navbar from "./components/navbar";
import Projects from "./components/projects/Projects";
// import ProfileCard from "./components/profile/ProfileCard";

function App() {
  return (
    <div className="flex min-h-screen text-midnight-100 dark:text-ocean-300">
      <Navbar />
      <main className="flex justify-center w-full min-h-screen m-auto bg-deep-100 dark:bg-swell-1200 dark:text-ocean-300">
        <Projects projects={data.projects} />
      </main>
    </div>
  );
}

export default App;
