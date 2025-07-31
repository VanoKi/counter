import {useReducer} from 'react'
import './App.css'
import {CountDisplay} from "./components/CountDisplay/CountDisplay.tsx";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel.tsx";
import {counterReducer} from "./model/counter-reducer.ts";

function App() {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0)

  const onclickIncHandler = () => {
    dispatchCounter({type: "inc"})
  }

  const onclickDecHandler = () => {
    dispatchCounter({type: "dec"})
  }
  console.log(counter);

  const onclickResetHandler = () => {
    dispatchCounter({type: "res"})
  }

  return (
    <>
      <div className={'counter'}>
        <CountDisplay
            counter={counter}
        />
        <ButtonPanel
            onclickIncHandler={onclickIncHandler}
            onclickDecHandler={onclickDecHandler}
            onclickResetHandler={onclickResetHandler}
            counter={counter}/>
      </div>

    </>
  )
}

export default App
