import React from "react";
import {Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
// import './Repertoire.css'
// // components
// import MovieList from './MovieList';
// import LoginRegisterView from './LoginRegisterView';
// import About from './About';
// import Repertoire from './Repertoire';
// import Home from './Home';
// import Profile from "./Profile";
// import ShowContainer from "./ShowContainer";
// images
// import logo from '../img/logo_burned.png';
// import slide1 from '../img/slide1.jpg'
// import slide2 from '../img/slide2.jpg';
// import slide3 from '../img/slide3.jpg';

class App extends React.Component {
  constructor() {
    super();
    // this.state = {slide2: slide2, text2: 'Joker', slide3: slide3, text3: 'Gwiezdne Wojny: Skywalker. Odrodzenie'};
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="navbar">
          <nav className="navbar sticky-top navbar-dark navbar-expand-sm justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link navbar-brand">
                  <div className="logo">
                    {" "}
                    {/* <img src={logo} alt=""/> */} <img src="" alt="" />
                    Meal Planner
                    {" "}
                  </div>{" "}
                </Link>{" "}
              </li>{" "}
              {/* <li className="nav-item">
                <Link to="/repertoire" className="nav-link">Repertuar</Link>
            </li>
            <li className="nav-item">
                <Link to="/movies" className="nav-link">Filmy</Link>
            </li>
            <li className="nav-item">
                <Link to="/myaccount" className="nav-link">Moje konto</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">O nas</Link>
            </li> */}{" "}
            </ul>{" "}
          </nav>{" "}
          <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark justify-content-center">
            <p> Autorzy: Matejuk Zdzisław, Matejuk Kamil </p>{" "}
          </nav>{" "}
        </div>{" "}
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}{" "}
        <Switch>
          {" "}
          {/* <Route exact path="/">
                <Home img1={this.state.slide1} img2={this.state.slide2} 
                    img3={this.state.slide3} txt1={this.state.text1} txt2={this.state.text2}
                    txt3={this.state.text3} />
            </Route>
            <Route path="/repertoire">
                <Repertoire />
            </Route>
            <Route path="/movies">
                <MovieList />
            </Route>
            <PrivateRoute path="/show/:id" component={ShowContainer}>
            </PrivateRoute>
            <PrivateRoute path="/myaccount" component={Profile}/>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/login">
                <LoginRegisterView />
            </Route> */}{" "}
        </Switch>{" "}
      </Router>
    );
  }
}

const isLoggedIn = () => {
  return localStorage.getItem("token");
};

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to="/login
            "
        />
      )
    }
  />
);

export default App;
