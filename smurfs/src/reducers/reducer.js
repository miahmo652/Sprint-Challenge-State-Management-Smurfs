
const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
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

default: 
return state;
}

}