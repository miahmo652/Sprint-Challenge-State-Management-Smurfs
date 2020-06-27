import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';


const Smurfs = (props) => {

    useEffect(()=>{
        getSmurfs();
    }, [])
if (props.isFetching){
    return <h2> Loading </h2>
}
    return(
        <div>
            {props.smurfs.map(smurf =>{
                return (
                    <div> 
                        <p>Name:{smurf.name}</p>
                        <p>Age:{smurf.age} </p>
                        <p>Height:{smurf.height} </p>
                    </div>
                )
            })}
            <button onClick={()=>props.getSmurfs()}>Get Smurf</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        name: state.smurfs.name
    }
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs)