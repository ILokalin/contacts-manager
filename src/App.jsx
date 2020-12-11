import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "redux/actions";
import { useRoutes, useStorage } from "hooks";
import { Alert, Footer, Navbar } from "components";
import { setVisibility } from "utils/setVisibility";

const style = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
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
  const [isAlert, alertMessage] = useSelector(({ alert }) => [
    alert.isShow,
    alert.message,
  ]);

  useEffect(() => {
    setUserId(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (userId !== id) {
      dispatch(userLogin(userId));
    }
    // eslint-disable-next-line
  }, [userId]);

  return (
    <>
      {setVisibility(isAuthenticated, <Navbar />)}
      <div className="container" style={style}>
        {setVisibility(isAlert, <Alert message={alertMessage} />)}
        <Router>{routes}</Router>
        <Footer />
      </div>
    </>
  );
}
