import * as React from "react";
import "../../mystyles.scss";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import StarterPage from "./sections/StarterPage";
import Description from "./sections/Description";
import SocialIcons from "./sections/SocialIcons";
import ExperienceSection from "./sections/ExperienceSection";

const IndexPage = () => {
  return (
    <main className="has-background-dark-main">
          <StarterPage />
          <About />
          <Description />
          <Gallery />
          <ExperienceSection />
          <Contact />
          <SocialIcons />
          <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Mateusz Tórz Studio Filmowe</title>
