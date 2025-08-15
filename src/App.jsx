import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Personal from './components/Personal'
import Preview from './components/Preview'

function App() {

  return (
    <>
    <header>
      <h1>CV maker</h1>
      <nav>

      </nav>
    </header>
    <main>
      <div className="flex">
        <div className="column">
          <section>
            <Personal></Personal>
          </section>
        </div>
        <div className="column">
          <Preview 
            firstName='Peter'
            lastName='Parker'
            >

          </Preview>
        </div>
      </div>
    </main>
    
    </>
  )
}

export default App
