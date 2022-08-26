import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import videoSrc from 'pexels-denys-gromov.mp4';

const Home = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="heroBanner">
        <video
          muted
          loop
          id="myVideo"
          className="video"
          autoPlay={true}
          preload={'auto'}
        >
          <source src={'pexels-denys-gromov.mp4'} type={'video/mp4'}></source>
          Your browser does not support the video tag.
        </video>

        <div className="heroBannerContent">
          <h1>TasteIT</h1>
          <p>
            TasteIt is recipe app which is made in REACT22K group React lessons
          </p>
          <button>
            <Link to="recipes">Recipes</Link>
          </button>
        </div>
      </div>
      <h2>Looking for recipes?</h2>
      <div className="bottomContainer">
        <div className="link">
          <h3>Browse recipes</h3>
          <p>
            Find your favourites in this collection. You can search recipes
            based on name or country
          </p>
          <Link to="recipes">Recipes</Link>
        </div>
        <div className="link">
          <h3>Add recipes</h3>
          <p>Recipe from your country is missing? No worries, add one!</p>
          <Link to="add-new">Add new</Link>
        </div>
        <div className="link">
          <h3>Want to know more about our projects?</h3>
          <p>Visit our programme homepage</p>
          <a href="http://bc.fi" target="_blank" rel="noreferrer">
            Business College Helsinki
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
