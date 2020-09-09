import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth/helper';
const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#8E2DE2" }
    } else {
        return { color: "#000000" }
    }
}
const Menu = ({ history }) => (
    <nav className="navbar  navbar-expand-lg navbar-light ">
        <h5 className="navbar-brand">webOTG</h5>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link style={currentTab(history, "/")} to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item ">
                    <Link style={currentTab(history, "/components")} to="/components" className="nav-link">Components</Link>
                </li>
                {isAuthenticated()  && (
                    <li className="nav-item ">
                        <Link style={currentTab(history, "/user/dashboard")} to="/user/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                )}
                
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item ">
                            <Link style={currentTab(history, "/signup")} to="/signup" className="nav-link">Sign up</Link>
                        </li>
                        <li className="nav-item ">
                            <Link style={currentTab(history, "/signin")} to="/signin" className="nav-link">Signin</Link>
                        </li>
                    </Fragment>
                )}
                {isAuthenticated() && (
                    <li className="nav-item ">
                        <a  className="nav-link text-warning" onClick={() => {
                            signout(() => {
                                history.push("/")
                            })
                        }}>
                            Signout
                        </a>
                    </li>
                )}

            </ul>
        </div>
    </nav>
)
export default withRouter(Menu);