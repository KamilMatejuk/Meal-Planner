// packages
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

// components
import LoginView from './LoginView';
import RegisterView from './RegisterView';
import MainView from './MainView';

class App extends React.Component {
    render() {
        return (
            <Router>
                <nav className="navbar sticky-top navbar-dark navbar-expand-sm justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link navbar-brand">
                                <div className="logo">Meal Planner</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <MainView />
                    </Route>
                    <Route path="/login">
                        <LoginView />
                    </Route>
                    <Route path="/register">
                        <RegisterView />
                    </Route>
            
                    {/* <PrivateRoute path="/show/:id" component={ShowContainer}/> */}
            
                </Switch>
                <footer className="navbar sticky-bottom navbar-expand-sm navbar-dark justify-content-center">
                    <p> Autorzy: Matejuk Zdzisław, Matejuk Kamil </p>
                </footer>
            </Router>
        );
    }
}

// const isLoggedIn = () => {
//   return localStorage.getItem("token");
// };

// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route
//     {...rest}
//     render={props =>
//       isLoggedIn() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to="/login
//             "
//         />
//       )
//     }
//   />
// );

export default App;
