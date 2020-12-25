import { SET_BASE_HTML_CONF, RESET_BASE_HTML_CONF } from '../actionTypes'
import { message } from 'antd'
import { get_callbackSetInfo, set_callbackSetInfo } from '../../api/api_demo'
const action_setBaseHtmlConf = (extention) => ({
    type: SET_BASE_HTML_CONF,
    payload: extention
})

export const action_async_setBaseHtmlConf = params => async dispatch => dispatch(action_setBaseHtmlConf(params))


export const action_async_resetBaseHtmlConf= () => async dispatch => dispatch({
    type: RESET_BASE_HTML_CONF
})


// ======================================================
// export const action_async_getCallBackSetInfo = () => {
//     return async dispatch => {
//         const r = await get_callbackSetInfo()
//         try {
//             if (r.nCode == 1) {
//                 // 请求成功的同步action
//                 if (Object.keys(r.extention).length > 0) {
//                     dispatch(action_getCallbackInfo(r.extention))
//                     return r.extention
//                 }
//             }
//         }
//         catch (err) {
//             message.error('获取回调信息失败！')
//         }
//         return r
//     }
// }

// export const action_async_setCallBackSetInfo = (param) => {
//     return async dispatch => {
//         const r = await set_callbackSetInfo(param)
//         try {
//             if (r.nCode == 1) {
//                 // 请求成功的同步action
//                 if (r.message === 'OK') {
//                     message.success('设置回调信息成功！')
//                     return r
//                 }
//             }
//         }
//         catch (err) {
//             message.error('设置回调信息失败！')
//         }
//         return r
//     }
// }