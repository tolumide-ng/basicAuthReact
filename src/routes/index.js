import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "../pages/Login";

const AppRouter = withRouter(({ location }) => (
	// <Provider store={store}>
	<Switch>
		<Route exact path="/" component={Login} />
	</Switch>
	// </Provider>
));

export default AppRouter;
