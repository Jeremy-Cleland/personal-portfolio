import { useState } from "react";
import clsx from "clsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ProjectSingle from "./pages/ProjectSingle.jsx";
import Resume from "./pages/Resume.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Router>
      <div className="flex min-h-screen ">
        <div className="sidebar fixed z-10">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <main
          className={clsx(
            "lg:p-15 mx-auto w-screen justify-center bg-dark-50 p-10 text-dark-900 dark:bg-dark-800 dark:text-dark-100 sm:m-0",
            isSidebarOpen ? "md:ml-60" : "md:ml-20"
          )}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectSingle />} />
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
