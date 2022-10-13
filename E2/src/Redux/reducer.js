import * as types from "./actionTypes";

const initial_state={
    musicRecords:[],
    loading:false, 
    error:false
}

const reducer=( state=initial_state, action)=>{

    switch(action.type){
        case types.GET_MUSIC_RECORD_REQUEST:
        return {
         ...state , loading:true
        }
        case types.GET_MUSIC_RECORD_SUCCESS :
        return {
          ...state, loading:false, musicRecords:action.payload
        }
        case types.GET_MUSIC_RECORD_FAILURE:
        return{
            ...state, error:true, loading:false
        }
         
        default : return state
    }
}

export {reducer}