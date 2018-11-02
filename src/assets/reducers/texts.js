
const initialState = {
    value: null,
    fontname: null
}

export default function texts(state = initialState, action) {
  if(action.type === 'UPDATE_FIELD') {
    return {...state, texts: action.payload}
  }
  return state;
}
