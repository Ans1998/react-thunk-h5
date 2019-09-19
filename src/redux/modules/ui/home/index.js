import {home as homeApiUrl} from '../../../../api/home'
import {FETCH_DATA} from "../../../middleware/api";
import {schema as homeSchema} from '../../entities/home'

import { sleep } from '../../../../utils/sleep'

import {combineReducers} from 'redux'

import { Toast } from 'antd-mobile';

// initData(赋值给store初始化数据源)
const initData = {
    homeSlide: {
        res: {},
        isRequest: false
    },
    homeCommonUseDevice: {
        res: {},
        isRequest: false
    }
};

// actions(请求状态)
export const types = {
    // 首页轮播图
    FETCH_SLIDE_REQUEST: 'HOME/FETCH_SLIDE_REQUEST',
    FETCH_SLIDE_SUCCESS: 'HOME/FETCH_SLIDE_SUCCESS',
    FETCH_SLIDE_FAIL: 'HOME/FETCH_SLIDE_FAIL',
    // 首页常用设备
    FETCH_DEVICE_REQUEST: 'HOME/FETCH_DEVICE_REQUEST',
    FETCH_DEVICE_SUCCESS: 'HOME/FETCH_DEVICE_SUCCESS',
    FETCH_DEVICE_FAIL: 'HOME/FETCH_DEVICE_FAIL',
};

// actions(事实上，只是返回个一个至少包含type的对象{ }，用于reducer接收)
export const actions = {
    requestSlide: () => {
        return (dispatch, getState) => {
            // console.log('getState()---', getState());
            const url = homeApiUrl.getHomeSlide;
            return dispatch(requestSlides(url)); // dispatch 发起一个 action
            // 同步行为会直接通过 Reducers 改变 State
            // 异步行为（副作用）会先触发 Effects 然后流向 Reducers 最终改变 State
        };
    },
    requestCommonUseDevice: () => {
        return (dispatch, getState) => {
            // console.log('getState()---', getState());
            const url = homeApiUrl.getHomeCommonUseDevice;
            let form = {
                pageSize: '5',
                is_homepage: 'true'
            };
            return dispatch(requestCommonUseDevices(url, form)); // dispatch 发起一个 action
            // 同步行为会直接通过 Reducers 改变 State
            // 异步行为（副作用）会先触发 Effects 然后流向 Reducers 最终改变 State
        };
    }
};
// 1.1 得到首页轮播图及专题广告 *
const requestSlides = (url) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_SLIDE_REQUEST,
            types.FETCH_SLIDE_SUCCESS,
            types.FETCH_SLIDE_FAIL
        ],
        method: 'post',
        endpoint: url,
        schema: homeSchema.name,
        form: {}
    }
});

// 6.4 常用机器 **
const requestCommonUseDevices = (url, form) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_DEVICE_REQUEST,
            types.FETCH_DEVICE_SUCCESS,
            types.FETCH_DEVICE_FAIL
        ],
        method: 'post',
        endpoint: url,
        schema: homeSchema.name,
        form: form
    }
});

// reducer(reducer：对应某个actionType有相应的数据返回 并且修改 state) async
const homeSlideReducer =  (state = initData.homeSlide, action) => {
    // console.log('home---', state); // return 是返回到 state
    // console.log('home---', action);
    switch (action.type) {
        case types.FETCH_SLIDE_REQUEST:
            Toast.loading('正在加载', 0);
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_SLIDE_SUCCESS:
            // await sleep(1800);
            if (action.response.data.status === 'succ') {
                Toast.hide();
                // await sleep(1800);
                // Toast.success('登录成功', 2);
                // actions.requestCommonUseDevice()
            } else {
                Toast.hide();
                Toast.fail(action.response.data.msg, 3);
            }
            return  {
                ...state,
                res: action.response.data.data,
                isRequest: false
            };
        case types.FETCH_SLIDE_FAIL:
            Toast.hide();
            Toast.fail('请求失败', 2);
            return {
                ...state
            };
        default:
            return state
    }
};

const homeCommonUseDeviceReducer =  (state = initData.homeCommonUseDevice, action) => {
    // console.log('home---', state); // return 是返回到 state
    // console.log('home---', action);
    switch (action.type) {
        case types.FETCH_DEVICE_REQUEST:
            // Toast.loading('正在加载', 0);
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_DEVICE_SUCCESS:
            // await sleep(1800);
            if (action.response.data.status === 'succ') {
                Toast.hide();
                // await sleep(1800);
                // Toast.success('登录成功', 2);
            } else {
                // Toast.hide();
                Toast.fail(action.response.data.msg, 3);
            }
            return  {
                ...state,
                res: action.response.data.data,
                isRequest: false
            };
        case types.FETCH_DEVICE_FAIL:
            Toast.hide();
            Toast.fail('请求失败', 2);
            return {
                ...state
            };
        default:
            return state
    }
};

const reducer = combineReducers({
    homeSlideReducer,
    homeCommonUseDeviceReducer
});
export default reducer;


// selectors(容器需要的方法)

export const getHomeSlide = (state) => {
    return state.ui.home.homeSlideReducer.res.ads || []
};

export const getHomeCommonUseDevice = (state) => {
    return state.ui.home.homeCommonUseDeviceReducer.res.useddevice_list || []
};
