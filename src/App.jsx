import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "hooks";
import "./App.css";

export function App() {
  const routes = useRoutes(false);
  return (
    <div>
      <Router>{routes}</Router>
    </div>
  );
}
