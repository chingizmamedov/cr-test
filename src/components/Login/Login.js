import React from 'react';

import Icon from '../Icon/Icon';
import './login.scss';
import './assets/user.svg';

function Login() {
  return (
    <div className="login">
      <Icon className="login__icon" name="user" />
      <div className="login__name">Войти</div>
    </div>
  )
}

export default Login;