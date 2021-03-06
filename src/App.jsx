import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "redux/actions";
import { useRoutes, useStorage, useActivity } from "hooks";
import { Alert, Footer, Navbar } from "components";
import { setVisibility } from "utils/setVisibility";

const style = {
  minHeight: "100vh",
  paddingTop: "30px",
};

export function App() {
  const dispatch = useDispatch();
  const [isAuthenticated, id] = useSelector(({ auth }) => [
    auth.isAuthenticated,
    auth.id,
  ]);
  const routes = useRoutes(isAuthenticated);
  const [userId, setUserId] = useStorage("");
  const isActivity = useActivity();
  const [isAlert, alertMessage] = useSelector(({ alert }) => [
    alert.isShow,
    alert.message,
  ]);

  useEffect(() => {
    setUserId(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (isActivity && userId !== id) {
      dispatch(userLogin(userId));
    }
    // eslint-disable-next-line
  }, [isActivity, userId]);

  return (
    <>
      {setVisibility(isAuthenticated, <Navbar />)}
      <div className="d-flex flex-column container" style={style}>
        {setVisibility(isAlert, <Alert message={alertMessage} />)}
        <Router>{routes}</Router>
        <Footer />
      </div>
    </>
  );
}
