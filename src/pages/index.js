import * as React from "react";
import "../../mystyles.scss";
import StarterPage from "./sections/StarterPage";
import About from "./sections/About";

const IndexPage = () => {
  return (
    <main className="has-background-dark-main">
          <StarterPage />
          <About />
          <footer class="footer">
              <div class="content has-text-centered">
                  <p>
                      <strong>Mateusz Tórz- portfolio</strong> &copy;Maksymilian Laskowski.
                  </p>
              </div>
          </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
