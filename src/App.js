import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Checkout from './component/Checkout';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
