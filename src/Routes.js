import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import cookie from 'js-cookie';
// import AsyncComponent from './components/asyncComponent/AsyncComponent';
import * as System from './page/system/systemAction';
import { Constants, RouteMap } from './utils/constants';
import { store } from './index';
import Login from './page/login/Login';
import NotFound from './page/NotFound';
import Dashboard from './page/dashboard/Dashboard';

const Logout = () => {
  store.dispatch(System.actionLogout());
  return <Redirect to={RouteMap.ROUTE_LOGIN} />;
};

const Routes = ({ location }) => {
  const token = cookie.get(Constants.TOKEN);
  if (!token && location.pathname !== RouteMap.ROUTE_LOGIN) {
    return <Redirect to={RouteMap.ROUTE_LOGIN} />;
  }
  return (
    <Switch>
      <Redirect exact from="/" to={RouteMap.ROUTE_DASHBOARD} />
      <Route exact path={RouteMap.ROUTE_DASHBOARD} component={Dashboard} />
      <Route exact path={RouteMap.ROUTE_LOGIN} component={Login} />} />
      <Route exact path={RouteMap.ROUTE_LOGOUT} component={Logout} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default withRouter(Routes);
