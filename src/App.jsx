import Navbar from "./components/Sidebar/";
import data from "./assets/data.jsx";
import Home from "./components/Home";
// import Projects from "./components/Projects/Projects";
// import ProfileCard from "./components/Profile/ProfileCard";

function App() {
  return (
    <div className="min-w-screen flex min-h-screen font-fira text-midnight-100 dark:bg-swell-950 dark:text-ocean-300">
      {/* <Sidebar /> */}
      <Navbar />
      <main className="m-auto flex min-h-screen w-full justify-center bg-deep-100 dark:bg-swell-950 dark:text-ocean-300">
        {/* <Projects projects={data.projects} />
        <ProfileCard ame={data.name} title={data.title} social={data.social} /> */}
      </main>
    </div>
  );
}

export default App;
