import {combineReducers} from 'redux'

import entities from './entities'
import ui from './ui'

// 合并领域状态
const rootReducer = combineReducers({
    entities,
    ui
});

export default rootReducer
