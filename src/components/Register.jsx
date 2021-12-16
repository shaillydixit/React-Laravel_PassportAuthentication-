import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Register extends Component {
render() {
return (
    <div> <br /><br /><br /><br />
    <div class="container">
        <div class="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">
                Register Your Account</h3>

            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">User Name</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary btn-block">Register</button>

                <br />
                Have an account?
                <Link to="/login">Login</Link>
            </form>



        </div>
    </div>
</div>
)
}
}

export default Register