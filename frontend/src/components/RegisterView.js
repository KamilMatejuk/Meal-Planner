// packages
import React from "react";
// css
import "../css/LoginRegister.css";

class RegisterView extends React.Component {
  render() {
    return (
      <div class="login-register-bg container-register">
        <div class="infoPanel">
          <p>
            Witamy w kreatorze posiłków.
            <br />
            Załóż konto, nie pożałujesz!
          </p>
        </div>
        <div class="formPanel">
          <form>
            <p>Utwórz konto</p>
            <input
              type="text"
              class="field"
              placeholder="Adres email"
              required
            />
            <input type="password" class="field" placeholder="Hasło" required />
            <input type="password" class="field" placeholder="Powtrz hasło" required />
            <button type="submit" class="field btn">
              Zarejestruj
            </button>
          </form>
          <a href="/login" class="field">
            Mam już konto
          </a>
        </div>
      </div>
    );
  }
}

export default RegisterView;
