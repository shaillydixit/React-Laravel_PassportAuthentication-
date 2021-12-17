import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  state={
    email:'',
    password:'',
    message:''
  }
  formSubmit = (e)=>{
    e.preventDefault();
    const data={
      email:this.state.email,
      password:this.state.password
    }
    axios.post('/login')
  
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      this.setState({
        loggedIn: true,
      })
      this.props.setUser(response.data.user);
    })
    .catch((error) => {
      console.log(error);
    });
  }

    render() {
      if(this.state.loggedIn){
        return <Navigate to={'/profile'} />
      }
        return (
            <div> <br /><br /><br /><br />
              <div class="container" >
                  <div class="jumbotron col-lg-4 offset-lg-4">
                      <h3 class="text-center">
                          Login Account</h3>  

  <form onSubmit={this.onSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" required onChange={(e)=>{this.setState({email:e.target.value})}} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" required onChange={(e)=>{this.setState({password:e.target.value})}} />
  </div>
  
  <button type="submit" class="btn btn-primary btn-block">Login</button>
 
 <br />
 Create your account! <Link to="/Register">Register</Link>
<br />
  Forget Password <Link to="/forget">Click Here</Link>
</form>



                  </div>
              </div>
            </div>
        )
    }
}

export default Login
