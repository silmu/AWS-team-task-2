import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import RecipeCard from './RecipeCard';

const Recipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFiltered] = useState(data);

  const searchHandler = (e) => {
    const result = data.filter((recipe) => {
      let recipeCountry = recipe.country.toLowerCase();
      let recipeName = recipe.name.toLowerCase();
      let searched = e.target.value.toLowerCase();

      //If searched word matches recipe name or country name show that RecipeCard
      if (recipeName.includes(searched) || recipeCountry.includes(searched)) {
        return recipe;
      } else {
        return '';
      }
    });
    console.log(result);
    setFiltered(result);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:3010/recipes')
      .then((res) => {
        setData(res.data);
        setFiltered(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Axios error: ', err);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Recipes</h1>
      <div className="search">
        <label htmlFor="serach">Search for recipe:</label>
        <input
          type="text"
          name="search"
          onChange={searchHandler}
          defaultValue=""
        />
      </div>

      <div className="recipeList">
        {filteredData?.map((recipeCard) => (
          <RecipeCard {...recipeCard} key={recipeCard.id} />
        ))}
      </div>
    </div>
  );
};
export default Recipes;
