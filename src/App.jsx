import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Nav from './views/Nav';
import Home from './views/Home/Home';

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <h1>App</h1>
        <Nav />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <p>home</p>
          </Route>
        </Switch>

      </BrowserRouter>
    </main>
  );
};

export default App;