import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="nav">
      <div className="dark-mode__toggle navBox">

        <div className="title">
          <h1>Women's World Cup</h1>
        </div>
        
        <div className="buttonBox">        
          <button onClick={toggleMode}> 
            Darkmode
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
