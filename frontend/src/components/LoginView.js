// packages
import React from "react";
// css
import "../css/LoginRegister.css";

class LoginView extends React.Component {
  constructor(props) {
    super(props);

    this.refs = React.createRef();

    this.state = {
        isLoggedIn: !!localStorage.getItem("token")
    };
  }

  login = (e) => {
    e.preventDefault(); 
    const mail = this.refs.login_mail.value;
    const pass = this.refs.login_pass.value;

    const usr = JSON.stringify({
        email: mail,
        password: pass
    });

    let token = undefined;
    const xhr = new XMLHttpRequest();
    xhr.onloadend = ()=> {
        if(xhr.status !== 200) {
            alert(xhr.response);
        } else {
            token = xhr.response;
            localStorage.setItem("token", token);
            this.setState({isLoggedIn: true});
        }
    };
    // changed from 3000
    xhr.open("POST", "https://obscure-sierra-52013.herokuapp.com/api/auth/");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(usr);
}

  render() {
    return (
      <div class="login-register-bg container-login">
        <div class="infoPanel">
          <p>
            Miło cię widzieć z powrotem.
            <br />
            Co dzisiaj zjemy?
          </p>
        </div>
        <div class="formPanel">
          <form>
            <p>Zaloguj się</p>
            <input
              type="text"
              class="field"
              placeholder="Adres email"
              ref="login_mail"
              required
            />
            <input type="password" class="field" placeholder="Hasło" ref="login_pass" required />
            <button type="submit" class="field btn">
              Zaloguj
            </button>
          </form>
          <a href="/register" class="field">
            Zarejestruj się
          </a>
          <a href="/login" class="field">
            Nie pamiętam hasła
          </a>
        </div>
      </div>
    );
  }
}

export default LoginView;
