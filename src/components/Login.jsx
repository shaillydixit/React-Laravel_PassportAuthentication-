import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <div>
              <div class="container" >
                  <div class="jumbotron col-lg-4 offset-lg-4">
                      <h3 class="text-center">
                          Login Account</h3>  

                          <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" class="btn btn-primary btn-block">Login</button>
 
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
