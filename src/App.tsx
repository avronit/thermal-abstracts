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
          <p className="eyebrow"><span className="live-dot" /> Registration and call for abstracts <span className="eyebrow-divider">/</span> December 15th, 2026</p>
          <h1 id="event-title">The 4th Conference on Materials and Technologies for Extreme Conditions</h1>
          <a className="button button-theris" href={therisUrl} target="_blank" rel="noreferrer">
            Learn about THERIS <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span>Materials science · Thermal engineering · Space research</span>
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
