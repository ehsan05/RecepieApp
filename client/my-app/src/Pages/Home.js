import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetUserId } from '../Hooks/useGetUserId';
const Home = () => {
  const [recepie, setRecepie] = useState([]);
  const [savedRecepies, setSavedRecepies] = useState([]);
  const userID = useGetUserId();
  useEffect(() => {
    const fetchRecepies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recepies');
        setRecepie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSavedRecepies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recepies/savedRecepies/ids/${userID}`
        );
        setSavedRecepies(response.data.savedRecepies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecepies();
    fetchSavedRecepies();
  }, []);
  const saveRecipe = async (recepieID) => {
    try {
      const response = await axios.put('http://localhost:3001/recepies', {
        recepieID,
        userID,
      });
      setSavedRecepies(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };
  const isSavedRecepie = (id) => savedRecepies.includes(id);
  return (
    <div>
      <h1>Recepies</h1>

      <ul>
        {recepie.map((recepie) => (
          <li key={recepie._id}>
            <div>
              <h2>{recepie.name}</h2>
            </div>
            <button
              onClick={() => saveRecipe(recepie._id)}
              disabled={isSavedRecepie(recepie._id)}
            >
              {isSavedRecepie(recepie._id) ? 'Saved' : 'Save'}
            </button>
            <div className="instructions">
              <p>{recepie.instructions}</p>
            </div>
            <img src={recepie.imageUrl} alt={recepie.name} />
            <p>Cooking Time:{recepie.cookingTime} (minutes)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
