
const initialState = {
    smurfs: [],
    isFetching: false,
    error: "",
    addSmurf: false
}

export const reducer = (state = initialState, action) => {
switch(action.type){
    case "FETCH_SMURFS":
        return{
            ...state,
            isFetching: true,
            error: ""
        }

    case "SMURF_SUCCESS":
        return{
            ...state,
            smurfs: action.payload,
            isFetching: false
        }
    case "SMURF_ERROR":
        return{
            ...state,
            isFetching: false,
            error: action.payload
        }

        
    case "ADD_SMURF":
        return {
          ...state,
          addSmurf: true
  
        };
  
      case "ADD_SUCCESS":
        return {
          ...state,
          addSmurf: false,
          smurfs: action.payload
  
        };
  
    

default: 
return state;
}

}