import React from 'react';
import {render} from "react-dom";
// import SignUpComp from '../components/Signup'
import {
    Col,
    Thumbnail,
    Row,
    FieldGroup,
    Checkbox,
    Button
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

class SignUp extends React.Component {


    
    render() {
        return (
            <div>
                <div className="container boxborder">
                    <h6>Sign Up</h6>
                    <div className="well-login">

                        <Thumbnail
                            id="login-thumb"
                            src="/assets/profilepic.jpeg"
                            height={100}
                            alt="242x200">

                            <form id="signup" role="form" action="" method="post">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">
                                        <i className="fa fa-user fa"></i>
                                    </span>
                                    <input
                                        id="sign-up-input"
                                        type="text"
                                        required
                                        className="form-control"
                                        placeholder="Name"
                                        aria-describedby="basic-addon1"/>
                                </div><br/>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">
                                        <i className="fa fa-envelope fa"></i>
                                    </span>
                                    <input
                                        id="sign-up-input"
                                        type="email"
                                        required
                                        className="form-control"
                                        placeholder="Email"
                                        aria-describedby="basic-addon1"/>
                                </div><br/>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">
                                        <i className="fa fa-key fa"></i>
                                    </span>
                                    <input
                                        id="sign-up-input"
                                        type="password"
                                        className="form-control"
                                        required
                                        placeholder="Password"
                                        aria-describedby="basic-addon1"/>
                                </div>
                                <br/>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">
                                        <i className="fa fa-key fa"></i>
                                    </span>
                                    <input
                                        id="sign-up-input"
                                        type="password"
                                        className="form-control"
                                        required
                                        placeholder="Confirm Password"
                                        aria-describedby="basic-addon1"/>
                                </div>
                                <Link to="/home">
                                    <Button className="btn btn-filled">
                                        Sign up</Button>
                                </Link>
                            </form>

                        </Thumbnail>
                        <Link to="login">
                            <h7>Already a member? LogIn.</h7>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp