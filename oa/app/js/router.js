/**
 * Created by Administrator on 2017/1/13.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import Login from './login';
import Welcome from './welcome';
import LendList from './lendList';
import NewLendList from './newLendList';
import ExpireLend from './expireLend';
import Customer from './customer';
import Employees from './employees';
import Count from './count';
import IndexOnMobile from './index.mobile';
//import Maintenance from './maintenance'; //维护页
import Undefined from './../../../commonjs/404';
import {
  AdminRoutes,
  JumpIndex,
  IsRoot,
  IsRootShowEmployee,
  OnlySmall10002,
  JumpMobile,
  JumpPc
} from './component/islogin';
import {} from "../css/index.css";
import {} from "../css/common.css";
import {} from "../css/index.css";
import {} from "../css/modal.css";
import {} from "../css/screen.css";

class Rout extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router history={browserHistory}>
        {/*这有一个坑，Route path 为域名下的主页路径*/}
        <Route path="/">
          {/*当前页面*/}
          <IndexRoute component={Login} onEnter={JumpIndex}/>
          <Route path="/index">
            <IndexRoute component={Welcome} onEnter={AdminRoutes}/>
            <Route path="lendList" component={LendList} onEnter={AdminRoutes}/>
            <Route path="newLendList" component={NewLendList} onEnter={AdminRoutes}/>
            <Route path="expireLend" component={ExpireLend} onEnter={IsRoot}/>
            <Route path=":id" component={Welcome} onEnter={AdminRoutes}/>
          </Route>
          <Route path="/truth/:id" component={Welcome} onEnter={OnlySmall10002}/>
          <Route path="/emp/emplist.html" component={Employees} onEnter={IsRootShowEmployee}/>
          <Route path="/statistics/statistics.html" component={Count} onEnter={AdminRoutes}/>
          <Route path="/customer/:id" component={Customer} onEnter={AdminRoutes}/>
          {/*<Route path="/mobile/index" component={IndexOnMobile} onEnter={JumpPc} />*/}
          <Route path="/**" component={Undefined} onEnter={AdminRoutes}/>
        </Route>
      </Router>
    )
  }
}
export default Rout;
