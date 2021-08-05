import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AttendEventPage from "./Pages/AttendEventPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AttendEventPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
