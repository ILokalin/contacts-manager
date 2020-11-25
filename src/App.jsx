import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert } from "components/Alert";
import { useRoutes } from "hooks";
import "./App.css";

export function App() {
  const [isAlert, alertMessage] = useSelector(({ alert }) => [
    alert.isShow,
    alert.message,
  ]);

  const routes = useRoutes(false);

  return (
    <div>
      {isAlert ? <Alert message={alertMessage} /> : null}
      <Router>{routes}</Router>
    </div>
  );
}
