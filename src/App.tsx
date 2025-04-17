import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState()

  return (
    <>
      <div className={'counter'}>
        <div className={'counter-display'}>
          0
        </div>
        <div className={'button-panel'}>
          <button className={'counter-button'}>inc</button>
          <button className={'counter-button'}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App
