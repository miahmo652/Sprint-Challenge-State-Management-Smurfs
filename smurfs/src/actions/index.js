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
    dispatch({type:"SMURF_ERROR", payload: err.response})
})
}