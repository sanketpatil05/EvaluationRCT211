import * as types from "./actionTypes";
import axios from "axios";

const get_music_request=()=>{
return {type:types.GET_MUSIC_RECORD_REQUEST}

}

const get_music_success=(payload)=>{
return {type:types.GET_MUSIC_RECORD_SUCCESS, payload:payload}
}

const get_music_failure=()=>{
    return {type:types.GET_MUSIC_RECORD_FAILURE}
}

const get_data=(dispatch)=>{
    dispatch(get_music_request())

    axios.get("http://localhost:8080/albums").then((res)=>{
        dispatch(get_music_success(res.data))
    }).catch((err)=>{
        dispatch(get_music_failure())
    })
}

export {get_data}