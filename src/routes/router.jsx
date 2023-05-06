import {
  HomePage,
  BlogPage,
  ProfilePage,
  ResumePage,
  ProjectPage,
} from "./pages";

import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" component={<HomePage />}></Route>
      <Route path="/profile" component={<ProfilePage />}></Route>
      <Route path="/projects/:slug" component={<ProjectPage />}></Route>

      <Route path="/resume" component={<ResumePage />}></Route>
      <Route path="/blog:slug" element={<BlogPage />}></Route>
    </Routes>
  );
}

export default Router;
