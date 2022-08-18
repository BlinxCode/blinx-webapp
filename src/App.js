import React from "react";
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Waitlist from './pages/WaitlistPage';

function App() {
  return (
    <Router>
      <GlobalStyle/>

      <Switch>
        <Route path ="/" exact component = {Home}></Route>
        <Route path ="/sign" exact component = {SignUp}></Route>
        <Route path ="/WaitlistPage" exact component = {Waitlist}></Route>
      </Switch>
    </Router>


  );
}

export default App;
