import './App.css'
import {CountDisplay} from "./components/CountDisplay/CountDisplay.tsx";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store.ts";

function App() {
  const counter = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  const onclickIncHandler = () => {
    dispatch({type: "inc"})
  }

  const onclickDecHandler = () => {
    dispatch({type: "dec"})
  }
  console.log(counter);

  const onclickResetHandler = () => {
    dispatch({type: "res"})
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
