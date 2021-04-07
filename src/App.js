import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/index'

function App() {
  return (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      

    </Switch>
  </BrowserRouter>
   
  );
}

export default App;
