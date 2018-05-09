import { get, postJson, postForm, postFormData } from '../utils/http'


//登录接口
export function login(body = {}) {
    return postJson('/gzh/lg', body)
}

// 红包接口
export function red_packet(body = {}) {
    return postJson('/webact/nearlist', body)
}


//红包详情
export function red_packet_detail(body = {}) {
    return postJson('/webact/list', body)
}
