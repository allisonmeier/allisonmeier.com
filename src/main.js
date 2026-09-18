import './style.css'

const SITE_PASSWORD = 'benzenefreesince23'
const ACCESS_KEY = 'allisonmeier-site-access'

const siteMarkup = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Allison Meier home">ALLISON<br />MEIER<span>.</span></a>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="#work">Selected work</a>
      <a href="#process">Process</a>
      <a href="#about">About</a>
    </nav>
    <a class="header-cta" href="#book">Let's talk <span aria-hidden="true">↗</span></a>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow">Independent strategist + creative partner</p>
        <h1>Make your next<br /><em>good thing</em> clear.</h1>
        <p class="hero-intro">I help ambitious people and purpose-led brands turn good ideas into work people remember, trust, and want to be part of.</p>
        <a class="button button-dark" href="#book">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
      <div class="hero-art" aria-label="Abstract editorial collage" role="img">
        <div class="art-note">A little<br />more<br /><strong>signal.</strong></div>
        <div class="art-circle"></div>
        <div class="art-line"></div>
        <div class="art-caption">Strategy / Story / Shape</div>
      </div>
      <div class="hero-footnote"><span>01</span> Clarity is a creative advantage.</div>
    </section>

    <section class="marquee" aria-label="Services">
      <div class="marquee-track">BRAND STRATEGY <span>✳</span> CREATIVE DIRECTION <span>✳</span> WORDS THAT WORK <span>✳</span> BRAND STRATEGY <span>✳</span></div>
    </section>

    <section class="work section-shell" id="work">
      <div class="section-heading"><p class="eyebrow">A few things I've helped shape</p><span>02 / 04</span></div>
      <div class="work-grid">
        <article class="project project-blue">
          <div class="project-visual visual-orbit"><span>new<br />rituals</span><i></i></div>
          <div class="project-meta"><div><h2>Common Ground</h2><p>Brand strategy / Verbal identity</p></div><span>↗</span></div>
        </article>
        <article class="project project-sand">
          <div class="project-visual visual-still"><div class="still-shape"></div><span>STILL<br />LIFE</span></div>
          <div class="project-meta"><div><h2>Sunday Objects</h2><p>Creative direction / Campaign</p></div><span>↗</span></div>
        </article>
        <article class="project project-red">
          <div class="project-visual visual-type"><span>HERE<br />FOR<br /><em>IT</em></span></div>
          <div class="project-meta"><div><h2>Here For It</h2><p>Positioning / Launch story</p></div><span>↗</span></div>
        </article>
      </div>
    </section>

    <section class="statement section-shell" id="about">
      <p class="eyebrow">The short version</p>
      <div class="statement-body"><h2>Less noise.<br /><span>More meaning.</span></h2><div><p>I’m Allison, a strategist and creative director for teams in the middle of something important: a new offer, a sharper point of view, or a story that’s ready to travel further.</p><a class="text-link" href="#book">More about me <span>↗</span></a></div></div>
    </section>

    <section class="process section-shell" id="process">
      <div class="section-heading"><p class="eyebrow">How we get there</p><span>03 / 04</span></div>
      <div class="process-list">
        <div class="process-row"><span>01</span><h3>Find the thread</h3><p>We get underneath the noise to find what is true, useful, and uniquely yours.</p><b>↘</b></div>
        <div class="process-row"><span>02</span><h3>Give it shape</h3><p>We turn the thinking into a clear story, a distinct voice, and a direction people can feel.</p><b>↘</b></div>
        <div class="process-row"><span>03</span><h3>Make it move</h3><p>You leave with the confidence and tools to take the work into the world.</p><b>↘</b></div>
      </div>
    </section>

    <section class="book section-shell" id="book">
      <div class="book-top"><p class="eyebrow">Have a good thing in the works?</p><span>04 / 04</span></div>
      <h2>Let’s make it<br /><em>mean something.</em></h2>
      <div class="book-bottom"><p>Tell me what you’re building, where it’s stuck, or where you want it to go. I’ll get back to you within two working days.</p><a class="button button-light" href="mailto:hello@allisonmeier.com?subject=Speaking%20Inquiry%20-%20Let%27s%20Talk%21&body=Hi%20Allison%2C%0A%0AI%27d%20love%20to%20talk%20about%20working%20together.%0A%0AHere%27s%20what%20I%27m%20building%3A%20">Book a conversation <span aria-hidden="true">↗</span></a></div>
    </section>
  </main>

  <footer class="site-footer"><span>© 2026 Allison Meier</span><span>New York / Everywhere</span><a href="mailto:hello@allisonmeier.com?subject=Speaking%20Inquiry%20-%20Let%27s%20Talk%21">hello@allisonmeier.com</a><a href="#top" aria-label="Back to top">Back to top ↑</a></footer>
`

const app = document.querySelector('#app')

function showSite() {
  app.innerHTML = siteMarkup
}

function showPasswordGate() {
  app.innerHTML = `
    <main class="access-gate">
      <div class="access-gate-top">
        <a class="wordmark" href="/" aria-label="Allison Meier home">ALLISON<br />MEIER<span></span></a>
        <span class="access-label">Excuse the mess!</span>
      </div>
      <div class="access-gate-content">

        <h1><em>Good things in progress!</em></h1>
        <p class="access-message">I’m currently updating this site with new work, new ideas, and a new look. Come back soon or use the link below to get in touch!</p>
        <a class="access-contact" href="mailto:hello@allisonmeier.com?subject=Speaking%20Inquiry%20-%20Let%27s%20Talk%21&body=Hi%20Allison%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20speaking.%0A%0A">Let's talk! <span>hello@allisonmeier.com ↗</span></a>
        <form class="access-form">
          <label for="site-password">web dev login:</label>
          <div class="access-input-row">
            <input id="site-password" name="password" type="password" autocomplete="current-password" required />
            <button type="submit" aria-label="Unlock site">Unlock <span aria-hidden="true">↗</span></button>
          </div>
          <p class="access-error" role="alert" aria-live="polite"></p>
        </form>
      </div>
    </main>
  `

  const form = app.querySelector('.access-form')
  const input = app.querySelector('#site-password')
  const error = app.querySelector('.access-error')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (input.value === SITE_PASSWORD) {
      sessionStorage.setItem(ACCESS_KEY, 'true')
      showSite()
      return
    }

    error.textContent = 'That password doesn’t look right.'
    input.select()
  })
}

if (sessionStorage.getItem(ACCESS_KEY) === 'true') {
  showSite()
} else {
  showPasswordGate()
}
