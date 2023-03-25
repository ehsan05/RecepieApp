import React from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();
  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('userID');
    navigate('/auth');
  };
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/createrecepie">CreateRecepies</Link>
      <Link to="/savedrecepie">SavedRecepies</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Navbar;
