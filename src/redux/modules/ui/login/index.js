import {login} from '../../../../api/login'
import {FETCH_DATA} from "../../../middleware/api";
import {schema as loginSchema} from '../../entities/login'
import { sleep } from '../../../../utils/sleep'
import {Toast} from 'antd-mobile';

// initData(赋值给store初始化数据源)
const initData = {
    res: JSON.parse(localStorage.getItem('userInfo')) || {},
    isRequest: false
};

// actions(请求状态)
export const types = {
    // 登录请求状态
    FETCH_LOGIN_REQUEST: 'LOGIN/FETCH_LOGIN_REQUEST',
    FETCH_LOGIN_SUCCESS: 'LOGIN/FETCH_LOGIN_SUCCESS',
    FETCH_LOGIN_FAILURE: 'LOGIN/FETCH_LOGIN_FAILURE'
};

// actions(操作动作)
export const actions = {
    request: (forms) => {
        return (dispatch, getState) => {
            const url = login.getLogin;
            let form = {
                username: forms.userName,
                password: forms.password
            };
            return dispatch(requestLogin(url, form)); // dispatch 之后 reducer 监听
        };
    }
};

const requestLogin = (url, form) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_LOGIN_REQUEST,
            types.FETCH_LOGIN_SUCCESS,
            types.FETCH_LOGIN_FAILURE
        ],
        method: 'post',
        endpoint: url,
        schema: loginSchema.name,
        form: form
    }
});

// reducer(修改store)async
const reducer =  (state = initData, action) => {
    // console.log('login---', action);
    // console.log('login---', state);
    switch (action.type) {
        case types.FETCH_LOGIN_REQUEST:
            Toast.loading('正在登录', 0);
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_LOGIN_SUCCESS:
            if (action.response.data.status === 'succ') {
                Toast.hide();
                // await sleep(1800);
                Toast.success('登录成功', 2);
                localStorage.setItem('userInfo', JSON.stringify(action.response.data.data));
            } else {
                Toast.hide();
                Toast.fail(action.response.data.msg, 3);
            }
            // await sleep(2000);
            return {
                ...state,
                res: action.response.data.data,
                isRequest: false
            };
        case types.FETCH_LOGIN_FAILURE:
            Toast.fail('登录失败', 3);
            return {
                ...state,
                isRequest: false
            };
        default:
            return state
    }
};
export default reducer;


// selectors(容器需要的方法)
export const getUserInfo = (state) => {
    return state.ui.login.res
};
