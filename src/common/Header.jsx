import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../components/Home';
import Profile from '../components/Profile';
import Nav from './Nav';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget_password';
export class Header extends Component {
    render() {
        return (
    <Router> 
            <div>
            <Nav/>
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/profile" element={ <Profile/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/forget" element={ <Forget/> } />

    </Routes>
</div>
</Router>
        )
    }
}

export default Header
