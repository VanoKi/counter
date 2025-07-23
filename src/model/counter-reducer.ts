const initialState = 0
type Actions = {type: 'inc'} | {type: 'dec'} | {type: 'res'}
export const counterReducer = (state: number = initialState, action: Actions) => {
  switch (action.type) {
    case 'inc': return state += 1
      break
    case "dec": return state -= 1
      break
    case 'res': return state = 0
      break
    default: return state
  }
}

