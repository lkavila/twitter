import { useContext } from "react";
import "tailwindcss/tailwind.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from "./lib/routes";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { restricted, unrestricted } = routes
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <main className='font-roboto'>
      <BrowserRouter>
        <Switch>

          {isLoggedIn ? unrestricted.map(({ path, component }, index) => <Route key={index} exact path={path} component={component} />) : <></>}
          {restricted.map(({ path, component }, index) => <Route key={index} exact path={path} component={component} />)}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;