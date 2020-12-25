
import { } from '../actionTypes'

const stateCallbackSetInfo={
    CallbackUrl: "",
    ReqestType: 0,
    CallbackEvent: 0
}

export function callBackSetInfo(state=stateCallbackSetInfo,action){
    switch(action.type){
        case 'a1':{
            return {...state,...action.payload};
        }
        case 'a2':{
            return stateCallbackSetInfo
        }
        default: return state
    }
}