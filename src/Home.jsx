import { useState } from 'react'
import headshot from './assets/headshot.jpg'
import linImage from './assets/InBug-Black.png'
import resume from './assets/resume.pdf'
import emailicon from './assets/gmail.svg'
import './Home.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="bio">
        <div className="Headshot">
          <img src={headshot} className="head" width="1700" height="179" alt="Headshot" />
        
          <div className='headshot-text'>
            <h1>Cody Kubiak</h1>
            <p>
              Recent Computer Science graduate from the University at Buffalo.
               Open to work.
            </p>

        {/* put img of lang and tools here */}

          </div>
        </div>
      </section>

      <section id="links">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href={`${import.meta.env.BASE_URL}icons.svg#documentation-icon`} />
          </svg>
          <h2>Resume</h2>
          <ul>
            <li>
              <a href={resume} target="_blank">
                View
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href={`${import.meta.env.BASE_URL}icons.svg#social-icon`} />
          </svg>
          <h2>Connect with me</h2>
          <ul>
            <li>
              <a href="https://github.com/Ckubiak198" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                 <use href={`${import.meta.env.BASE_URL}icons.svg#github-icon`} />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.gg/QNh4QNrN" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={`${import.meta.env.BASE_URL}icons.svg#discord-icon`} />
                  
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/codykubiak/" target="_blank">
                <img
                  src={linImage}
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:ckubiak198@gmail.com" target="_blank">
                <img
                  src={emailicon}
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                </img>
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
