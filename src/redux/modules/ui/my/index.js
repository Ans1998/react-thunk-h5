import {my} from '../../../../api/my'
import {FETCH_DATA} from "../../../middleware/api";
import {schema as mySchema} from '../../entities/my'
import { sleep } from '../../../../utils/sleep'
import {Toast} from 'antd-mobile';

// initData(赋值给store初始化数据源)
const initData = {
    res: {},
    isRequest: false
};

// actions(请求状态)
export const types = {
    FETCH_MY_REQUEST: 'MY/FETCH_MY_REQUEST',
    FETCH_MY_SUCCESS: 'MY/FETCH_MY_SUCCESS',
    FETCH_MY_FAILURE: 'MY/FETCH_MY_FAILURE'
};

// actions(操作动作)
export const actions = {
    request: () => {
        return (dispatch, getState) => {
            const url = my.getMyInfo;
            let form = {
                appid: '2018091361332477'
            };
            return dispatch(requestMyInfo(url, form)); // dispatch 之后 reducer 监听
        };
    }
};

const requestMyInfo = (url, form) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_MY_REQUEST,
            types.FETCH_MY_SUCCESS,
            types.FETCH_MY_FAILURE
        ],
        method: 'post',
        endpoint: url,
        schema: mySchema.name,
        form: form
    }
});

// reducer(修改store)
const reducer = (state = initData, action) => {
    switch (action.type) {
        case types.FETCH_MY_REQUEST:
            Toast.loading('正在加载', 0);
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_MY_SUCCESS:
            if (action.response.data.status === 'succ') {
                Toast.hide();
                // await sleep(1800);
                // Toast.success('登录成功', 2);
            } else {
                Toast.hide();
                Toast.fail(action.response.data.msg, 3);
            }
            return {
                ...state,
                res: action.response.data.data,
                isRequest: false
            };
        case types.FETCH_MY_FAILURE:
            Toast.fail('网络请求失败', 3);
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
export const getMyInfo = (state) => {
    return state.ui.my.res || []
}
