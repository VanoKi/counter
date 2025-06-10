import { useState } from 'react'
import './App.css'
import {CountDisplay} from "./components/CountDisplay/CountDisplay.tsx";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel.tsx";
import {useReducer} from "react";

function App() {
  // const [a, setA] = useState(0)
  const initialState = {count: 0}
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment' : return {count: state.count + 1}
      case 'decrement' : return {count: state.count - 1}
      default: return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

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
