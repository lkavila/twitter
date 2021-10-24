import { useContext } from "react";
import "tailwindcss/tailwind.css"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from "./lib/routes";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { restricted, unrestricted } = routes
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <main className='font-roboto'>
      <BrowserRouter>
        <Switch>

          {unrestricted.map(({ path, Component }, index) =>
            <Route key={index} exact path={path}>
              {isLoggedIn() ? <Redirect to="/home" /> : <Component />
              }
            </Route>)}

          {restricted.map(({ path, Component }, index) =>
            <Route key={index} exact path={path} >
              {
                !isLoggedIn() ? <Redirect to="/login" /> : <Component />
              }
            </Route>)}

        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;