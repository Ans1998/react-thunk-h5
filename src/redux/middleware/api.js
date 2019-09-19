import http from '../../utils/axios'

// 经过中间件处理的action所具有的标识
export const FETCH_DATA = 'FETCH DATA';
export default store => next => action => {
    const callAPI = action[FETCH_DATA];

    if (typeof callAPI === 'undefined') {
        return next(action)
    }
    const {endpoint, method, form, schema, types} = callAPI;
    if (typeof endpoint !== 'string') {
        throw new Error('endpoint必须为字符串类型的URL')
    }
    if (!schema) {
        throw new Error('必须指定领域实体的schema')
    }
    if (!Array.isArray(types) && types.length !== 3) {
        throw new Error('需要指定一个包含3个action types的数组')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('action type 必须为字符串类型')
    }

    const [requestType, successType, failureType] = types;

    next({type: requestType});

    return request(endpoint, method, form).then(response => {
        console.log('api request ---', response);
            next({
                type: successType,
                response,
                schema
            })
        }
    ).catch((error) => {
        console.log('api error ---' , error);
        next({
            type: failureType,
            schema,
            error: error.msg || '获取数据失败'
        })
    })
}
// 执行网络请求
const request = (endpoint, method, form) => {
    return http[method](endpoint, form)
};
