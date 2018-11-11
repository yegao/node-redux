type Action = {
  type:string
}

type Reducer = (state:any,action:Action)=>{

}

interface Store {
  dispatch(action:Action),
  getState()
}

export const createStore = (reducer:Reducer):Store=>{
  let state:any;
  const dispatch = (action:Action)=>{
    state = reducer(state,action)
  }
  const getState = ():object=>{
    return state
  }

  return { dispatch, getState };
}
