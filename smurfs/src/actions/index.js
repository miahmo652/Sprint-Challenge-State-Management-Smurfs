import axios from 'axios'

export const getSmurfs = () => dispatch => {
dispatch({type:"FETCH_SMURFS"});
axios.get('http://localhost:3333/smurfs')
.then(res =>{
    console.log(res)
    dispatch({type:"SMURF_SUCCESS", payload:res.data})
})
.catch(err =>{
    console.log(err)
    dispatch({type:"SMURF_ERROR", payload: err.res})
})
}


export const addSmurf = smurf => dispatch => {
    dispatch({ type: "ADD_SMURF" });
    axios
      .post("http://localhost:3333/smurfs", smurf) 
      .then(res => { 
        console.log(res);  
        dispatch({ type: "ADD_SUCCESS", payload: res.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: "SMURF_ERROR", payload: error.res });
  
      });
  
  };