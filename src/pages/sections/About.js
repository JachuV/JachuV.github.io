import React from 'react';

const About = () => {
	return (
		<section className="section">
              <div className="container">
                  <div className="columns">
                      <div className="column is-half-desktop">
                          <img src="https://picsum.photos/800/600"/>
                      </div>
                      <div className="column">
                        <h2 className="title oswald-font-300 is-1 text-shadow has-text-title">Cześć!</h2>
                        <p className="is-size-3 has-text-main">Mam na imię Mateusz.<br />Stwórzmy razem Twoją wspaniałą,<br /> filmową historię!</p>
                      </div>
                  </div>
              </div>
          </section>
	)
};

export default About