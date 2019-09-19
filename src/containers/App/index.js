import React, {Component} from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Routers from '../../routes'

import {actions as loginActions, getUserInfo} from "../../redux/modules/ui/login";

// import {bindActionCreators} from "redux";

import {connect} from "react-redux";

class App extends  Component{
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {userInfo} = this.props;
        let token = null;
        if (userInfo && 'token' in userInfo) {
            token = userInfo.token
        }
        return (
            <Router>
                <Switch>
                    {Routers.map((item, index) => {
                        return <Route key={index} path={item.path} exact render={props =>
                           (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                                pathname: '/login',
                                state: { from: props.location }
                                }} />)
                            )} />
                    })}
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        userInfo: getUserInfo(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App
