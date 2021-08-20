import { Helmet } from 'react-helmet';
import './App.css';
import App2 from './views/App2/App2'
import App3 from './views/App3/App3'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>My first react app</title>
        <meta name="hola" content="wasaaa bro" />
      </Helmet>
      <div>
        <h1>App1</h1>
      </div>
      <App2 />
      <App3 />
    </div>
  );
}

export default App;
