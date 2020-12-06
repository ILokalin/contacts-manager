import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthPage } from "pages/AuthPage";
import { ContactsPage } from "pages/ContactsPage";
import { setVisibility } from "utils";

export const useRoutes = (isAuthentication) => {
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(isAuthentication ? "/contacts" : "/");
  }, [isAuthentication]);

  return (
    <>
      <Switch>
        <Route path={path} exact>
          {setVisibility(isAuthentication, <ContactsPage />, <AuthPage />)}
        </Route>
        <Redirect path="*" to={path} />
      </Switch>
    </>
  );
};
