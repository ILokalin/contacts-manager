import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "components/Alert";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { useRoutes, useStorage } from "hooks";
import { setVisibility } from "utils/setVisibility";
import { userLogin } from "redux/actions";

const style = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
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
