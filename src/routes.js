/* eslint-disable no-unused-expressions */
import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import List from "./pages/List";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import PageLayout from "./components/PageLayout";

const Router = () => {
  const CustomRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        <PageLayout>
          <Component {...props} />
        </PageLayout>
      )}
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path="/" component={List} />
        <CustomRoute path="/cart" component={Cart} />
        <CustomRoute path="/not-found" component={NotFound} />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
