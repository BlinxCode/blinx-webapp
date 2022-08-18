import React from "react";
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';

function App() {
  return (
    <Router>
      <GlobalStyle/>

      <Switch>
        <Route path ="/" exact component = {Home}></Route>
        <Route path ="/sign" exact component = {SignUp}></Route>
        <Route path ="/Pricing" exact component = {Pricing}></Route>
      </Switch>
    </Router>


  );
}

export default App;
