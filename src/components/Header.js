import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">TasteIT</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="recipes">Recipes</Link>
          </li>
          <li>
            <Link to="add-new">Add new</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
