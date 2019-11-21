import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "../components/pages/Login";
import Header from "../components/UI/molecules/Header";

const noHeaderPaths = ["/"];

const AppRouter = withRouter(({ location }) => (
	<Provider store={store}>
		{noHeaderPaths.includes(location.pathname) ? <Header /> : ""}
		<Switch>
			<Route exact path="/" component={Login} />
		</Switch>
	</Provider>
));

export default AppRouter;
