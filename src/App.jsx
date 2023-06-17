import { useState } from "react";
import clsx from "clsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import About from "./pages/about/index.jsx";
import Portfolio from "./pages/portfolio/index.jsx";
import ProjectSingle from "./pages/project/index.jsx";
import Resume from "./pages/resume/index.jsx";
import Blog from "./pages/blog/index.jsx";
import Contact from "./pages/contact/index.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Router>
      <div className="flex min-h-screen">
        <div className="fixed z-10">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <main
          className={clsx(
            "mx-auto w-screen justify-center bg-dark-50 p-10 text-dark-900 dark:bg-dark-800 dark:text-dark-100 sm:m-0",
            isSidebarOpen ? "md:ml-60" : "md:ml-20"
          )}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectName" element={<ProjectSingle />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
