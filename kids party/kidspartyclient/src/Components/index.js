import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../logo.png";
import Event_list from './evenement/event_list';
import { Nav, NavItem, NavLink, Spinner } from "reactstrap";
import LogIn from "./authentification/LogIn";
import Register from "./Users/Register";
import Users from "./Users/users_professionnel"
import "./acceuil.css";

export default class Index extends Component {

    render() {
        return (
            <div>
                <Router>

                    <div >
                        <div >


                            {/*    link router  */}
                            <Nav className="menus" >
                                < NavItem>
                                    <img src={logo} className="img-lg" />
                                </NavItem>
                                <NavItem>
                                    <Link>
                                        <Link to="/">
                                            <NavLink >Les evenments</NavLink>
                                        </Link>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link>
                                        <Link to="/users">
                                            <NavLink >Utlisateurs</NavLink>
                                        </Link>
                                    </Link>
                                </NavItem>



                                <NavItem >
                                    <Link to="/connexion">
                                        <NavLink >connexion</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem >
                                    <Link to="/inscription">
                                        <NavLink className="navlinksidebar ">Inscription</NavLink>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </div>





                        {/* routing  menu principal */}
                        <div >
                            <Switch >

                                <Route exact path="/">

                                    <Event_list />

                                </Route>

                                <Route exact path="/users">

                                    <Users />

                                </Route>

                                <Route exact path="/connexion">


                                    <LogIn />

                                </Route>

                                <Route exact path="/inscription">

                                    <Register />

                                </Route>

                            </Switch>
                        </div>
                    </div>


                    <div className="footer">
                        <p>
                            Copyright &copy; Simplon Tunis, Made with{" "}
                            <i class="fas fa-heart"></i>
                        </p>
                    </div>
                </Router >
            </div>
        )
    }
}