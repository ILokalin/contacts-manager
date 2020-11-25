import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthPage } from "pages/AuthPage";
import { ContactsPage } from "pages/ContactsPage";

export const useRoutes = (isAuthentication) => {
  return (
    <div>
      {isAuthentication ? (
        <Switch>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Redirect path="*" to="/contacts" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <AuthPage />
          </Route>
          <Redirect path="*" to="/" />
        </Switch>
      )}
    </div>
  );
};
