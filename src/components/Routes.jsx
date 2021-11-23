import React from "react";

import { Route, Switch } from "react-router-dom";

import Customers from "../pages/Customers";
import Dashboard from "../pages/Home/Dashboard";
import CfgProd from "../pages/Produtos/CfgProd/CfgProd";
import Pizzas from "../pages/Produtos/Pizzas/Pizzas";
import Acogue from "./../pages/Produtos/Acogue/Acogue";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/produtos/pizzas" component={Pizzas} />
			<Route path="/produtos/acougue" component={Acogue} />
			<Route path="/produtos/configProd" component={CfgProd} />
		</Switch>
	);
};

export default Routes;
