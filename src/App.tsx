import './App.css'

const submissionFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdhfYRPZCB4z92dgfHYqHQt7NwwyTrfP_oQ6vkBNIOQ-T9OXQ/viewform'
const registrationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeyIpa6tdY4_gkSOo5SasldJR6YhGHyR66WyOcyWLHNBNek5A/viewform?usp=header'
const therisUrl = 'https://www.bgu.ac.il/en/u/research-centers/theris/'

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="event-title">
        <img
          className="hero-sun"
          src={`${import.meta.env.BASE_URL}sun-closeup.png`}
          alt="Close-up view of the Sun's bright, textured surface"
        />
        <div className="hero-shade" />
        <img
          className="research-diagram"
          src={`${import.meta.env.BASE_URL}materials-diagram.png`}
          alt="Research themes: materials characterization, materials production and processing, and simulation"
        />
        <header className="site-header">
          <div className="partner-logos" role="group" aria-label="Conference partners">
            <div className="partner-logo-theris" role="img" aria-label="THERIS, Thermal Research Institute of Israel">
              <span className="theris-lockup-flame" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}theris-lockup-he.png)` }} />
              <span className="theris-lockup-type" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}theris-lockup-he.png)` }} />
            </div>
            <img
              className="partner-logo partner-logo-ministry"
              src={`${import.meta.env.BASE_URL}ministry-of-defense-logo-he.png`}
              alt="Israel Ministry of Defense"
            />
            <img
              className="partner-logo partner-logo-mafat"
              src={`${import.meta.env.BASE_URL}mafat-logo-he.png`}
              alt="MAFAT, Directorate of Defense Research and Development"
            />
          </div>
        </header>
        <div className="hero-main">
          <div className="hero-content" id="top">
            <p className="eyebrow"><span className="live-dot" /> Registration and call for abstracts <span className="eyebrow-divider">/</span> <span className="hero-date"><span className="hero-date-line">December <span className="hero-date-number">15<sup className="ordinal-suffix">th</sup></span> 2026</span><span className="hero-location">Ben-Gurion University</span></span></p>
            <h1 id="event-title">The 4<sup className="ordinal-suffix">th</sup> Conference on Materials and Technologies for Extreme Conditions</h1>
          </div>
          <a className="hero-theris-link button button-theris" href={therisUrl} target="_blank" rel="noreferrer">
            Learn about THERIS <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span>Material characterization, Simulation, Material development and production</span>
          <span>Abstract deadline <strong>15 November 2026</strong></span>
        </div>
      </section>

      <section className="submission-section" id="submission" aria-labelledby="submission-heading">
        <div className="submission-layout">
          <div className="submission-form submission-connect">
            <div className="form-choice">
              <p className="section-index">01 <span>/</span> Conference participation</p>
              <h3>Register for the conference</h3>
              <p>Complete your conference registration and participant details.</p>
              <p className="registration-note">Please note that registration is free and subject to approval. Participation is not guaranteed; confirmation will be provided based on venue capacity and availability.</p>
              <a className="button button-outline" href={registrationFormUrl} target="_blank" rel="noreferrer">Registration <span aria-hidden="true">↗</span></a>
            </div>
            <div className="form-choice">
              <p className="section-index">02 <span>/</span> Research presentation and students poster session</p>
              <h3>Submit an abstract</h3>
              <p>Send your abstract and upload your poster for the materials research program.</p>
              <div className="guideline-block">
                <p className="aside-label">Submission notes</p>
                <ul>
                  <li>Abstracts must be written in English.</li>
                  <li>Keep the abstract to 250 words or fewer.</li>
                  <li>Include objective, method, key results, and conclusion.</li>
                  <li>One author should be selected as the presenter.</li>
                </ul>
              </div>
              <a className="button button-dark" href={submissionFormUrl} target="_blank" rel="noreferrer">Submit <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside className="submission-aside" id="guidelines">
            <div className="deadline-block">
              <p className="aside-label">Important dates</p>
              <div className="deadline-item">
                <p className="deadline-date"><time dateTime="2026-11-15">15 <span>NOV</span></time></p>
                <p className="deadline-year">2026 · Abstract deadline</p>
              </div>
              <div className="deadline-item">
                <p className="deadline-date"><time dateTime="2026-12-08">08 <span>DEC</span></time></p>
                <p className="deadline-year">2026 · Registration deadline</p>
              </div>
              <div className="deadline-item">
                <p className="deadline-date"><time dateTime="2026-12-15">15 <span>DEC</span></time></p>
                <p className="deadline-year">2026 · Conference Date</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <span>Thermal Research Institute of Israel</span>
        <span>Materials for a hotter world.</span>
      </footer>
    </main>
  )
}

export default App
