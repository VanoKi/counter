import { useState } from 'react'
import './App.css'
import {CountDisplay} from "./components/CountDisplay/CountDisplay.tsx";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel.tsx";

function App() {
  const [counter, setCounter] = useState(0)

  const onclickIncHandler = () => {
      setCounter(counter + 1)
  }

  const onclickResetHandler = () => {
    setCounter(0)
  }
  console.log(counter);


  return (
    <>
      <div className={'counter'}>
        <CountDisplay
            a={counter}
        />
        <ButtonPanel
            onclickIncHandler={onclickIncHandler}
            onclickResetHandler={onclickResetHandler}
            a={counter}/>
      </div>

    </>
  )
}

export default App
