import { useLocation } from 'react-router-dom';

const RecipeSingle = () => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div className="recipeSingle">
      <div className="leftContainer">
        <div className="flagContainer">
          <img src={data.flag} alt={data.name} className="flag" />
        </div>
        <img src={data.image} alt={data.name}></img>
        <h2>Ingredients:</h2>
        {data.ingredients?.map((ingredient) => {
          return (
            <div className="ingredients" key={ingredient.ingredient}>
              {ingredient.quantity} {ingredient.ingredient}
            </div>
          );
        })}
      </div>

      <div className="rightContainer">
        <h1>{data.name}</h1>
        {data.country}
        <div>
          <h2>Description: </h2>
          <p>{data.description}</p>
        </div>
        <div>
          <h2>Author: </h2>
          <p>{data.author}</p>
        </div>
        <h2>Preparation</h2>
        <p>{data.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
