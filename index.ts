type Action = {
  type:string
}

type Reducer = (state:any,action:Action)=>{

}

interface Store {
  dispatch(action:Action),
  getState(),
  interatePath(path:string)
}

export const splitPath = (path:string):string[]=>{
  return path.split(/\\|\//)
}

export const createStore = (reducer:Reducer):Store=>{
  let state:any;

  const dispatch = (action:Action)=>{
    state = reducer(state,action)
  }

  const getState = ():object=>{
    return state
  }

  const interatePath = (path:string):any=>{
    return splitPath(path).reduce((prev,next)=>{
      dispatch({type:next})
      return state;
    })
  }

  return { dispatch, getState ,interatePath };
}