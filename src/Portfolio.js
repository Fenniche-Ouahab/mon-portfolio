import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import About from "./components/about/About";
import Internship from "./components/internships/Internship";
import Skills from "./components/skills/Skills";
import { AnimatePresence } from "framer-motion";
import Education from "./components/education/Education";
import Project from "./components/projects/Projects";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            {/* navbar */}
            <Navbar />

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/stages">
                  <Internship />
                </Route>
                <Route path="/connaissance">
                  <Skills />
                </Route>
                <Route path="/projets">
                  <Project />
                </Route>

                <Route path="/formations">
                  <Education />
                </Route>

                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
