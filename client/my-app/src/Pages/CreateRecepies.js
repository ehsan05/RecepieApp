import React, { useState } from 'react';
import axios from 'axios';
import { useGetUserId } from '../Hooks/useGetUserId.js';
import { useNavigate } from 'react-router-dom';
const CreateRecepies = () => {
  const navigate = useNavigate();
  const userID = useGetUserId();
  const [recepie, setRecepie] = useState({
    name: '',
    ingredients: [],
    instructions: '',
    imageUrl: '',
    cookingTime: 0,
    userOwner: userID,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecepie({ ...recepie, [name]: value });
  };
  const addIngredient = () => {
    setRecepie({ ...recepie, ingredients: [...recepie.ingredients, ''] });
  };
  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recepie.ingredients;
    ingredients[idx] = value;
    setRecepie({ ...recepie, ingredients: ingredients });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/recepies', recepie);
      alert('Recepie Created');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="create-recipe">
      <h2>Create Recepie</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={recepie.name} onChange={handleChange} />
        <label htmlFor="ingredients">Ingredients</label>
        {recepie.ingredients.map((ingredient, idx) => {
          return (
            <input
              type="text"
              key={idx}
              onChange={(event) => handleIngredientChange(event, idx)}
              name="ingredients"
              value={ingredient}
            />
          );
        })}
        <button onClick={addIngredient} type="button">
          Add Ingredient
        </button>

        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          onChange={handleChange}
          value={recepie.instructions}
        ></textarea>

        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          onChange={handleChange}
          value={recepie.imageUrl}
        />
        <label htmlFor="cookingTime">Cooking Time</label>
        <input
          type="number"
          name="cookingTime"
          id="cookingTime"
          onChange={handleChange}
          value={recepie.cookingTime}
        />
        <button type="Submit">Create Recepie</button>
      </form>
    </div>
  );
};

export default CreateRecepies;
