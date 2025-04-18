import { useState } from 'react'
import './App.css'

function App() {
  let [a, setA] = useState(0)
  const onclickIncHandler = () => {
    if (a < 5) {
      setA(++a)
    }
  }
  const onclickResetHandeler = () => {
    setA(0)
  }

  return (
    <div className={'counter'}>
      <div className={'counter-display'}>
        <span className={a === 5 ? 'red' : ''}>{a}</span>
      </div>
      <div className={'button-panel'}>
        <button className={'counter-button'}
                onClick={onclickIncHandler}
                disabled={a === 5}>
          inc
        </button>
        <button className={'counter-button'}
                onClick={onclickResetHandeler}
                disabled={a === 0}
        >
          reset
        </button>
      </div>
    </div>
  )
}

export default App
