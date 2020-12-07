import { Route, Switch, Redirect } from "react-router-dom";
import { AuthPage, ContactsPage } from "pages";

export const useRoutes = (isAuthentication) => {
  if (isAuthentication) {
    return (
      <Switch>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Redirect path="*" to="/contacts" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  );
};
