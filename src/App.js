import React from 'react';
import Home from "./pages/home/Home";
import "./assets/stylesheets/style.css"
import Skills from "./pages/skills/Skills";
import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fullpage>
        <FullPageSections>
            <FullpageSection>
                <Home />
            </FullpageSection>
            <FullpageSection>
                <Skills />
            </FullpageSection>
            <Footer />
        </FullPageSections>
    </Fullpage>
  );
}

export default App;
