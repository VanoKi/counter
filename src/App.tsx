import {useReducer} from 'react'
import './App.css'
import {CountDisplay} from "./components/CountDisplay/CountDisplay.tsx";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel.tsx";

function App() {
  // const [a, setA] = useState(0)
  const initialState = {count: 0}
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment' : return {count: state.count + 1}
      case 'decrement' : return {count: state.count - 1}
      case 'reset' : return {count: 0}
      default: return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const onclickIncHandler = () => {
    dispatch({type: 'increment'})
  }

  const onclickResetHandler = () => {
    dispatch({type: 'reset'})
  }


  return (
    <>
      <div className={'counter'}>
        <CountDisplay
            count={state.count}
        />
        <ButtonPanel
            onclickIncHandler={onclickIncHandler}
            onclickResetHandler={onclickResetHandler}
            count={state.count}/>
      </div>

    </>
  )
}

export default App
