import {combineReducers} from 'redux'

import home from './home'
import test from './test'
import login from './login'
import my from './my'
// 合并领域状态
const rootUiReducer = combineReducers({
    my,
    login,
    home,
    test
});

export default rootUiReducer
