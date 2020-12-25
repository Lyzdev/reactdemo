
import { SET_BASE_HTML_CONF,RESET_BASE_HTML_CONF} from '../actionTypes'

const stateBaseHtmlConf={
   headerHeight:64,
   contentHeight:600,
}

export function baseHtmlConf(state=stateBaseHtmlConf,action){
    switch(action.type){
        case SET_BASE_HTML_CONF:{
            return {...state,...action.payload};
        }
        case RESET_BASE_HTML_CONF:{
            return stateBaseHtmlConf
        }
        default: return state
    }
}