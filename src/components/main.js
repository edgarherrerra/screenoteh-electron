import React from 'react'
import AuthService from '../services/auth'

const Main = (props) => {
  const authService = new AuthService()
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <h1>Main</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Main
