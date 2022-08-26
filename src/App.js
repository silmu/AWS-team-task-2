import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Recipe from './components/RecipeCard';
import AddNewRecipe from './components/AddNewRecipe';
import RecipeSingle from './components/RecipeSingle';

const RouterWrapper = (props) => {
  const params = useParams();
  return <RecipeSingle params={params} {...props} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:recipe" element={<RouterWrapper />} />
          <Route path="/add-new" element={<AddNewRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
