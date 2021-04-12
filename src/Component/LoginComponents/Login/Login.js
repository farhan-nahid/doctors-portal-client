import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import login from '../../../images/login.png';
import firebaseConfig from './Firebase.config';
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }



const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    console.log(loggedInUser);

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    
      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }
    
    return (
        <section className="mt-5 pt-5">
            <Container>
                <Row >
                    <Col md={5} className="mt-2 login-container p-5">
                        <div className="">
                            <h5 className="text-center mb-5" as={Link} to="/">Login</h5>
                                <form action="" >
                                    <label htmlFor=""> Your Name </label>
                                    <input className="form-control" type="email" name="" id=""/>
                                    <label htmlFor=""> Your Password </label>
                                    <input className="form-control" type="password" name="" id=""/>
                                    <input type="submit" value="Sign In" className="btn-color mt-5" />
                                </form>
                                <button onClick={handleGoogleSignIn}>Google Sign In</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src={login} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;