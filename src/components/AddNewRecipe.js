import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddNewRecipe = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    author: '',
    country: '',
    flag: '',
    description: '',
    ingredients: [],
    instructions: '',
  });
  //Ingredients state is used for the structure and ids
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      ingredient: '',
      quantity: '',
    },
  ]);
  const [countries, setCountries] = useState([]);

  const inputHandler = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const countryHandler = (e) => {
    countries.map((country) => {
      if (country.name.common == e.target.value) {
        setNewRecipe({
          ...newRecipe,
          country: e.target.value,
          flag: country.flags.svg,
        });
        console.log(newRecipe);
      }
    });
  };

  const ingredientHandler = (e, i) => {
    //Spread the ingredients into a list
    let listIng = [...ingredients];
    //Set value to the name at specified key
    listIng[i][e.target.name] = e.target.value;
    setNewRecipe({ ...newRecipe, ingredients: listIng });

    console.log(listIng);
  };

  const addIngredient = (e) => {
    e.preventDefault();
    console.log(ingredients);
    //Add new ingredient field with incremented id
    setIngredients([
      ...ingredients,
      { id: ingredients.length + 1, ingredient: '', quantity: '' },
    ]);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,flag,flags')
      .then((res) => {
        setIsLoading(false);
        //Sort by country name
        let sorted = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log('Axios get countries error: ', err);
      });
  }, []);

  const postHandler = (e) => {
    console.log(newRecipe);
    axios
      .post('http://localhost:3010/recipes', newRecipe)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Axios post error: ', err);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <form className="addNewRecipe" onSubmit={postHandler}>
      <h1>Add New Recipe</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" required onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="country">Recipe is from:</label>
        <select name="country" required onChange={countryHandler}>
          {countries.map((country) => (
            <option value={country.name.common} key={country.name.common}>
              {country.name.common}
              {country.flag}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea required name="description" onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="image">Image link</label>
        <input type="text" name="image" required onChange={inputHandler} />
      </div>
      <h2>Ingredients</h2>
      <div className="formIngredients">
        {ingredients.map((item, i) => {
          return (
            <div key={i} className="formIngredient">
              <div className="quantity">
                <label htmlFor="quantity"></label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  required
                  onChange={(e) => ingredientHandler(e, i)}
                />
              </div>
              <div className="ingredientName">
                <label htmlFor="ingredient"></label>
                <input
                  type="text"
                  name="ingredient"
                  placeholder="Ingredient"
                  required
                  onChange={(e) => ingredientHandler(e, i)}
                />
              </div>
              <button onClick={addIngredient}>+</button>
            </div>
          );
        })}
      </div>

      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea required name="instructions" onChange={inputHandler} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewRecipe;
