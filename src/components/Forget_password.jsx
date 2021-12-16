import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Forget_password extends Component {
    render() {
        return (
            <div> <br /><br /><br /><br />
                <div class="container">
        <div class="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">
                Recover Your Account</h3>

            <form>
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" />
                </div>
                
                <button type="submit" class="btn btn-primary btn-block">Forget Password</button>

                <br />
                Have an account?
                <Link to="/login">Login</Link> <br />
                Create your account! <Link to="/Register">Register</Link>
            </form>



        </div>
    </div>
            </div>
        )
    }
}

export default Forget_password
