import {_axios} from './_axios'
import {ip,apiPrefix} from '../utils/http'
import {message} from 'antd'
/*
* 获取回调设置信息
*   CutTaskManage/GetCallbackUrlByTenantCode
*/
export async function get_callbackSetInfo() {
    try {
        const r = await _axios.get(`${apiPrefix}/CutTaskManage/GetCallbackUrlByTenantCode`)
        return r.data
    }
    catch (err) {
        message.error('获取回调设置信息异常: ',err)


    }
}

/*
* 获取回调设置信息
*   CutTaskManage/UpdateCutTaskFinishCallback
*/
export async function set_callbackSetInfo(param) {
    try {
        const r = await _axios.post(`${apiPrefix}/CutTaskManage/UpdateCutTaskFinishCallback`,param)
        return r.data
    }
    catch (err) {
        message.error('设置回调设置信息异常: ',err)


    }
}