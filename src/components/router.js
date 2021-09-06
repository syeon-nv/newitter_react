import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./routes/auth";
import Home from "./routes/home";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/">
            <Home />
          </Route>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = {};

export default AppRouter;
