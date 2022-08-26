import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const { name, author, country, flag, description, image } = props;

  return (
    <div className="recipe">
      <h2>{name}</h2>
      <div>{country}</div>

      <div className="flagContainter">
        <img className="flag" src={flag} alt={country} />
      </div>

      <div className="imageContainer">
        <img src={image} alt={name}></img>
      </div>
      <p>{description}</p>
      <div>by {author}</div>

      <button>
        <Link to={name} state={{ from: 'recipes', data: props }}>
          Read more
        </Link>
      </button>
    </div>
  );
};
export default RecipeCard;
