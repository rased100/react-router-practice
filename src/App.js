import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      </BrowserRouter>
      <Header></Header>
      <Home></Home>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
