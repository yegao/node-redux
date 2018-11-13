type Action = {
  type:string
}

type Reducer = (state:any,action:Action)=>{

}

type Listener = ()=>{

}
interface Store {
  subscribe(listener:Listener),
  dispatch(action:Action),
  getState(),
  hitAction(path:string,map:object,error:(arg:any)=>{})
}

export const splitPath = (path:string):string[]=>{
  return path.split(/\\|\//)
}

export const createStore = (reducer:Reducer):Store=>{
  let state:any;
  let list:Action[];
  let listeners:Listener[];

  const dispatch = (action:Action)=>{
    list.push(action);//一般放到session中
    state = reducer(state,action);
    for(let listener of listeners){
      listener();
    }
  }

  const getState = ():object=>{
    return state
  }

  const subscribe = (listener:Listener)=>{
    listeners.push(listener)
  }

  const hitAction = (path:string,map:object,error:(arg:any)=>{}):any=>{
    const paths = splitPath(path);
    let action = map;
    for(let part of paths){
      if(!action[part]){
        return error("path not found")
      }
      action = action[part];
    }
    if(!(<Action>action).type){
      return error("action has no type")
    }
    dispatch(<Action>action)
  }

  return { subscribe, dispatch, getState ,hitAction };
}