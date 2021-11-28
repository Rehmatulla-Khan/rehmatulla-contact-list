import Home from "./pages/home/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "./components/themeProvider/ThemeProvider";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Login from "./pages/login/Login";
import { useDispatch } from "react-redux";

const App = () => {
  const history = useHistory();

  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      history.push("/auth");
    } else {
      history.push("/");
    }
  }, [accessToken, history]);

  const dispatch = useDispatch();

  return (
    <Switch>
      <Route path="/auth" exact>
        <Login />
      </Route>

      <Route path="/" exact>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </Route>

      {/* <Redirect to="/" /> */}
    </Switch>
  );
};

export default App;
