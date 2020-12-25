import { } from '../actionTypes'
import { message } from 'antd'
import { get_callbackSetInfo, set_callbackSetInfo } from '../../api/api_demo'
const action_setCallbackInfo = (extention) => ({
    type: 'a1',
    payload: extention
})
const action_getCallbackInfo = (extention) => ({
    type: 'a2',
    payload: extention
})
export const action_async_test = () => {
    return async dispatch => {
        dispatch(action_getCallbackInfo({}))
        // const r = await get_callbackSetInfo()
        // try {
        //     if (r.nCode == 1) {
        //         // 请求成功的同步action
        //         if (Object.keys(r.extention).length > 0) {
        //             dispatch(action_getCallbackInfo(r.extention))
        //             return r.extention
        //         }
        //     }
        // }
        // catch (err) {
        //     message.error('获取回调信息失败！')
        // }
        // return r
    }
}
export const action_async_getCallBackSetInfo = () => {
    return async dispatch => {
        const r = await get_callbackSetInfo()
        try {
            if (r.nCode == 1) {
                // 请求成功的同步action
                if (Object.keys(r.extention).length > 0) {
                    dispatch(action_getCallbackInfo(r.extention))
                    return r.extention
                }
            }
        }
        catch (err) {
            message.error('获取回调信息失败！')
        }
        return r
    }
}

export const action_async_setCallBackSetInfo = (param) => {
    return async dispatch => {
        const r = await set_callbackSetInfo(param)
        try {
            if (r.nCode == 1) {
                // 请求成功的同步action
                if (r.message==='OK') {
                    message.success('设置回调信息成功！')
                    return r
                }
            }
        }
        catch (err) {
            message.error('设置回调信息失败！')
        }
        return r
    }
}