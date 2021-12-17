import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../components/Home';
import Profile from '../components/Profile';
import Nav from './Nav';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget_password';
import axios from 'axios';

class Header extends Component {
    state={
        user:{}
    }
    componentDidMount(){
        axios.get('/user')
        .then((response) => {
            this.setUser(response.data)

    })
    .catch((error) => {
      console.log(error);
    });
    
    }

    setUser = (user) => {
        this.setState({user:user})
    }

    render() {
        return (
    <Router> 
            <div>
            <Nav user={this.state.user} setUser={this.setUser}/>
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/profile" element={()=> <Profile user={this.state.user}/> } />
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
