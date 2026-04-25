import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const macDownloadUrl =
    'https://github.com/ShukriPro/badmiton/releases/download/v5/court-manager.dmg'
  const windowsDownloadUrl =
    'https://github.com/ShukriPro/badmiton/releases/download/v6/court-manager-6.0.0.exe'

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>
            Court Manager <span aria-hidden="true">🏸</span>
          </h1>
          <p>Download the Court Manager software for your computer.</p>
        </div>
        <div className="downloadButtons" role="group" aria-label="Downloads">
          <a className="downloadBtn primary" href={macDownloadUrl} download>
            Download for Mac
          </a>
          <a className="downloadBtn" href={windowsDownloadUrl} download>
            Download for Windows
          </a>
        </div>
      </section>
    </>
  )
}

export default App
