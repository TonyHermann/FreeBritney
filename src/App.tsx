import { useState } from 'react'
import "./assets/styles/app.scss";
import FreeBritneyButton from './components/layout/freebritneyButton';
import HelpButton from './components/layout/helpButton';

function App() {
  return (
    <div className="App">
        <main>
          <HelpButton></HelpButton>
          <div className="buttonContainer">
          <FreeBritneyButton></FreeBritneyButton>
          </div>
        </main>
    </div>
  )
}

export default App
