import Home from "./pages/home/Home";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./components/themeProvider/ThemeProvider";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </Route>

      <Route path="/auth" exact>
        <Login />
      </Route>

      {/* <Route>
          <Redirect to="/" />
        </Route> */}
    </Switch>
  );
};

export default App;
