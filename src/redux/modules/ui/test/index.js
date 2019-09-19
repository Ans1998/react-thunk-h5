import {test} from '../../../../api/test'
import {FETCH_DATA} from "../../../middleware/api";
import {schema as testSchema} from '../../entities/test'
import { sleep } from '../../../../utils/sleep'
import {Toast} from 'antd-mobile';

// initData(赋值给store初始化数据源)
const initData = {
    res: {},
    isRequest: false
};

// actions(请求状态)
export const types = {
    FETCH_LIKES_REQUEST: 'FETCH_LIKES_REQUEST',
    FETCH_LIKES_SUCCESS: 'FETCH_LIKES_SUCCESS',
    FETCH_LIKES_FAILURE: 'FETCH_LIKES_FAILURE'
};

// actions(操作动作)
export const actions = {
    request: () => {
        return (dispatch, getState) => {
            const url = test.getAdslist;
            return dispatch(requsetTest(url)); // dispatch 之后 reducer 监听
        };
    }
};

const requsetTest = (url) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_LIKES_REQUEST,
            types.FETCH_LIKES_SUCCESS,
            types.FETCH_LIKES_FAILURE
        ],
        method: 'post',
        endpoint: url,
        schema: testSchema.name,
        form: {}
    }
});

// reducer(修改store)
const reducer = async (state = initData, action) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:
            Toast.loading('正在加载', 0);
            return {
                ...state
            };
        case types.FETCH_LIKES_SUCCESS:
            await sleep(1800);
            if (action.response.data.status === 'succ') {
                Toast.hide();
                // await sleep(1800);
                Toast.success('登录成功', 2);
            } else {
                Toast.hide();
                Toast.fail(action.response.data.msg, 3);
            }
            return {
                ...state,
                data: action.response.data
            };
        case types.FETCH_LIKES_FAILURE:
            Toast.fail('网络请求失败', 3);
            return {
                ...state
            };
        default:
            return state
    }
};
export default reducer;


// selectors(容器需要的方法)
export const getTestData = (state) => {
    return state.ui.test.data
}
