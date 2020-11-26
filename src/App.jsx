import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert } from "components/Alert";
import { Footer } from "components/Footer";
import { useRoutes } from "hooks";
import "./App.css";

const style = {
  height: "100vh",
};

export function App() {
  const [isAlert, alertMessage] = useSelector(({ alert }) => [
    alert.isShow,
    alert.message,
  ]);

  const routes = useRoutes(false);

  return (
    <div className="container" style={style}>
      {isAlert ? <Alert message={alertMessage} /> : null}
      <Router>{routes}</Router>
      <Footer />
    </div>
  );
}
