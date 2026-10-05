import { useEffect, useState } from 'react'
import './App.css'

type Submission = {
  name: string
  email: string
  institution: string
  coAuthors: string
  title: string
  track: string
  format: string
  abstract: string
}

const storageKey = 'tri-abstract-draft'
const emptySubmission: Submission = {
  name: '',
  email: '',
  institution: '',
  coAuthors: '',
  title: '',
  track: '',
  format: 'Oral presentation',
  abstract: '',
}

function App() {
  const [submission, setSubmission] = useState<Submission>(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved ? { ...emptySubmission, ...JSON.parse(saved) } : emptySubmission
    } catch {
      return emptySubmission
    }
  })
  const [fileName, setFileName] = useState('')
  const [notice, setNotice] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const wordCount = submission.abstract.trim()
    ? submission.abstract.trim().split(/\s+/).length
    : 0

  useEffect(() => {
    const draft = localStorage.getItem(storageKey)
    if (draft) setNotice('Your saved draft has been restored on this device.')
  }, [])

  function updateField(field: keyof Submission, value: string) {
    setSubmission((current) => ({ ...current, [field]: value }))
    setNotice('')
    setSubmitted(false)
  }

  function saveDraft() {
    localStorage.setItem(storageKey, JSON.stringify(submission))
    setNotice('Draft saved on this device.')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (wordCount > 250) {
      setNotice('Please shorten the abstract to 250 words or fewer.')
      return
    }
    if (wordCount === 0) {
      setNotice('Add your abstract text before submitting.')
      return
    }
    setSubmitted(true)
    setNotice('Demo submission complete. Your details are stored only in this browser; connect a submission service to receive abstracts.')
  }

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
          <a className="institute-mark" href="#top" aria-label="Thermal Research Institute home">
            <span className="mark-symbol" aria-hidden="true">TRI</span>
            <span className="mark-name">Thermal Research<br />Institute of Israel</span>
          </a>
          <a className="header-link" href="#submission">Submission portal <span aria-hidden="true">↘</span></a>
        </header>
        <div className="hero-content" id="top">
          <p className="eyebrow"><span className="live-dot" /> Design preview <span className="eyebrow-divider">/</span> 2026 abstract portal</p>
          <h1 id="event-title">Characterizing Materials<br />at the Edge of the Sun</h1>
          <p className="hero-copy">A research forum for the materials that meet extreme heat, intense radiation, and the unknown.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#submission">Begin submission <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#guidelines">Read submission details <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-footnote">
          <span>Materials science · Thermal engineering · Space research</span>
          <span>Abstract deadline <strong>15 December 2026</strong></span>
        </div>
      </section>

      <section className="submission-section" id="submission" aria-labelledby="submission-heading">
        <p className="preview-banner">Preview only. Abstracts submitted here are not sent to the institute or stored centrally.</p>
        <div className="section-heading">
          <div>
            <p className="section-index">01 <span>/</span> Abstract submission</p>
            <h2 id="submission-heading">Put your research<br className="desktop-break" /> in the conversation.</h2>
          </div>
          <p className="section-intro">Share work that advances our understanding of materials under extreme thermal conditions. Required fields are marked with an asterisk.</p>
        </div>

        <div className="submission-layout">
          <form className="submission-form" onSubmit={handleSubmit}>
            <div className="form-block">
              <div className="form-block-heading">
                <span className="form-number">1</span>
                <div><h3>Presenting author</h3><p>Who should we contact about this submission?</p></div>
              </div>
              <div className="field-grid">
                <label className="field">
                  <span>Full name <b>*</b></span>
                  <input required autoComplete="name" value={submission.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Dr. Alex Cohen" />
                </label>
                <label className="field">
                  <span>Email address <b>*</b></span>
                  <input required type="email" autoComplete="email" value={submission.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@institute.org" />
                </label>
                <label className="field field-wide">
                  <span>Institution or organization <b>*</b></span>
                  <input required autoComplete="organization" value={submission.institution} onChange={(event) => updateField('institution', event.target.value)} placeholder="University, laboratory, or company" />
                </label>
                <label className="field field-wide">
                  <span>Co-authors <small>Optional · separate names with commas</small></span>
                  <input value={submission.coAuthors} onChange={(event) => updateField('coAuthors', event.target.value)} placeholder="Full names of additional authors" />
                </label>
              </div>
            </div>

            <div className="form-block">
              <div className="form-block-heading">
                <span className="form-number">2</span>
                <div><h3>Research abstract</h3><p>Give your work a clear title and choose the closest research area.</p></div>
              </div>
              <div className="field-grid">
                <label className="field field-wide">
                  <span>Abstract title <b>*</b></span>
                  <input required maxLength={180} value={submission.title} onChange={(event) => updateField('title', event.target.value)} placeholder="A concise title for your research" />
                </label>
                <label className="field field-wide">
                  <span>Research area <b>*</b></span>
                  <select required value={submission.track} onChange={(event) => updateField('track', event.target.value)}>
                    <option value="" disabled>Select a research area</option>
                    <option>High-temperature alloys</option>
                    <option>Ceramics and refractory materials</option>
                    <option>Thermal barrier and protective coatings</option>
                    <option>Solar and concentrated-energy materials</option>
                    <option>Materials characterization and testing</option>
                    <option>Computational materials science</option>
                    <option>Other materials research</option>
                  </select>
                </label>
                <label className="field field-wide">
                  <span>Abstract <b>*</b></span>
                  <textarea required rows={8} value={submission.abstract} onChange={(event) => updateField('abstract', event.target.value)} placeholder="Introduce the challenge, describe your approach, and summarize the most important findings." />
                  <span className={`word-count${wordCount > 250 ? ' word-count-over' : ''}`} aria-live="polite">{wordCount} / 250 words</span>
                </label>
                <fieldset className="field field-wide format-field">
                  <legend>Presentation preference <b>*</b></legend>
                  <div className="choice-row">
                    {['Oral presentation', 'Poster presentation', 'No preference'].map((format) => (
                      <label className="choice" key={format}>
                        <input type="radio" name="format" value={format} checked={submission.format === format} onChange={(event) => updateField('format', event.target.value)} />
                        <span>{format}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="field field-wide upload-field">
                  <span>Supporting document <small>Optional · PDF or Word · 10 MB maximum</small></span>
                  <input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => {
                    const file = event.target.files?.[0]
                    if (file && file.size > 10 * 1024 * 1024) {
                      setFileName('Files must be smaller than 10 MB.')
                      event.target.value = ''
                    } else {
                      setFileName(file?.name ?? '')
                    }
                  }} />
                  {fileName && <small className="file-feedback" role="status">{fileName}</small>}
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button className="button button-outline" type="button" onClick={saveDraft}>Save draft <span aria-hidden="true">↓</span></button>
              <button className="button button-dark" type="submit">{submitted ? 'Submitted' : 'Submit abstract'} <span aria-hidden="true">↗</span></button>
            </div>
            {notice && <p className={`form-notice${submitted ? ' form-notice-success' : ''}`} role="status">{notice}</p>}
          </form>

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
            <p className="aside-contact">Official submission contact and receipt workflow will be connected before launch.</p>
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
