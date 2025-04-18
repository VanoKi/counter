import { useState } from 'react'
import './App.css'
import {CountDisplay} from "./components/CountDisplay/CountDisplay.tsx";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel.tsx";

function App() {
  const [a, setA] = useState(0)

  const onclickIncHandler = () => {
      setA(a + 1)
  }

  const onclickResetHandler = () => {
    setA(0)
  }
  console.log(a);


  return (
    <>
      <div className={'counter'}>
        <CountDisplay
            a={a}
        />
        <ButtonPanel
            onclickIncHandler={onclickIncHandler}
            onclickResetHandler={onclickResetHandler}
            a={a}/>
      </div>

    </>
  )
}

export default App
