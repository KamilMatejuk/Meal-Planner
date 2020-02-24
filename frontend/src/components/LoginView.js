// packages
import React from "react";
// css
import "../css/LoginRegister.css";

class LoginView extends React.Component {
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
              required
            />
            <input type="password" class="field" placeholder="Hasło" required />
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
