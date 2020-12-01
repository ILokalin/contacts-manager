import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert } from "components/Alert";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { useRoutes } from "hooks";
import { setVisibility } from "utils/setVisibility";

const style = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
};

export function App() {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const routes = useRoutes(isAuthenticated);
  const [isAlert, alertMessage] = useSelector(({ alert }) => [
    alert.isShow,
    alert.message,
  ]);

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
