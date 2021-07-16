import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route) => (
          <Route key={Math.random()} {...route} />
        ))}
      </Switch>
    </div>
  );
}
