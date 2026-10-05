import './App.css'

const submissionFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdhfYRPZCB4z92dgfHYqHQt7NwwyTrfP_oQ6vkBNIOQ-T9OXQ/viewform'
const registrationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeyIpa6tdY4_gkSOo5SasldJR6YhGHyR66WyOcyWLHNBNek5A/viewform?usp=header'

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="event-title">
        <img
          className="hero-sun"
          src="https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0304.jpg"
          alt="The Sun's bright outer atmosphere, captured by NASA's Solar Dynamics Observatory"
        />
        <div className="hero-shade" />
        <header className="site-header">
          <div className="theris-lockup" role="img" aria-label="THERIS, Thermal Research Institute of Israel, theris@bgu.ac.il">
            <img className="theris-flame" src={`${import.meta.env.BASE_URL}theris-flame.png`} alt="" />
            <span className="theris-wordmark" aria-hidden="true">THERIS</span>
            <span className="theris-institute" aria-hidden="true"><span>THERMAL RESEARCH</span><span>INSTITUTE OF ISRAEL</span></span>
          </div>
          <a className="header-link" href="#submission">Submission portal <span aria-hidden="true">↘</span></a>
        </header>
        <div className="hero-content" id="top">
          <p className="eyebrow"><span className="live-dot" /> Call for abstracts <span className="eyebrow-divider">/</span> 2026</p>
          <h1 id="event-title">Characterizing Materials<br />at the Edge of the Sun</h1>
          <p className="hero-copy">A research forum for the materials that meet extreme heat, intense radiation, and the unknown.</p>
        </div>
        <div className="hero-footnote">
          <span>Materials science · Thermal engineering · Space research</span>
          <span>Abstract deadline <strong>15 December 2026</strong></span>
        </div>
      </section>

      <section className="submission-section" id="submission" aria-labelledby="submission-heading">
        <div className="section-heading">
          <div>
            <p className="section-index">01 <span>/</span> Forms</p>
            <h2 id="submission-heading">Choose your form.</h2>
          </div>
          <p className="section-intro">Conference registration and abstract submission are handled separately. Choose the form that matches what you need.</p>
        </div>

        <div className="submission-layout">
          <div className="submission-form submission-connect">
            <div className="form-choice">
              <p className="section-index">01 <span>/</span> Conference participation</p>
              <h3>Register for THERIS 2026</h3>
              <p>Complete your conference registration and participant details.</p>
              <a className="button button-outline" href={registrationFormUrl} target="_blank" rel="noreferrer">Open registration form <span aria-hidden="true">↗</span></a>
            </div>
            <div className="form-choice">
              <p className="section-index">02 <span>/</span> Research presentations</p>
              <h3>Submit an abstract</h3>
              <p>Send your abstract and upload your poster for the materials research program.</p>
              <a className="button button-dark" href={submissionFormUrl} target="_blank" rel="noreferrer">Open abstract form <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside className="submission-aside" id="guidelines">
            <div className="deadline-block">
              <p className="aside-label">Important date</p>
              <p className="deadline-date">15 <span>DEC</span></p>
              <p className="deadline-year">2026 · Abstract deadline</p>
            </div>
            <div className="guideline-block">
              <p className="aside-label">Submission notes</p>
              <ul>
                <li>Abstracts must be written in English.</li>
                <li>Keep the abstract to 250 words or fewer.</li>
                <li>Include objective, method, key results, and conclusion.</li>
                <li>One author should be selected as the presenter.</li>
              </ul>
            </div>
            <p className="aside-contact">Abstract responses are recorded in the linked spreadsheet. Poster uploads are stored in Google Drive; Google sign-in is required.</p>
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
