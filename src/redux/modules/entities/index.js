import {combineReducers} from 'redux'
import login from './login'
import home from './home'
import my from './my'
import test from './test'

// 合并领域状态
const rootEntitiesReducer = combineReducers({
    my,
    login,
    home,
    test,
});

export default rootEntitiesReducer
