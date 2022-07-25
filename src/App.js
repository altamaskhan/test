import logo from './logo.svg';
import './App.css';
import Transaction from "../src/Components/Transaction/Transaction"
import {BrowserRouter as Router, Route,Switch, Link, Routes, BrowserRouter, useHistory} from 'react-router-dom';
import About from "../src/Components/aboutus/about"
import Login from "./auth/Login/Login"
import Verification from "./auth/verification/Verification"
import Registration from "./auth/Registration/Registration"
import Dashboard from "./Components/Dashboard/Dashboard"
import Questionnaire from './Components/Questionnaire/Questionnaire';



function App() {
  return (
<>



<BrowserRouter>
          <Switch>

            <Route exact  path="/">
            <Login />
            </Route>
            
            <Route  exact path="/verification">
            <Verification/>
            </Route>

            <Route  exact path="/registration">
            <Registration/>
            </Route>

            <Route  exact path="/dashboard">
            <Dashboard/>
            </Route>

           < Route  exact path="/questionnaire">
            <Questionnaire/>
            </Route>
  
  
         
        </Switch>
    </BrowserRouter>
</>
    
  );
}

export default App;
