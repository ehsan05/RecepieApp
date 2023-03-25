import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetUserId } from '../Hooks/useGetUserId';
const SavedRecepies = () => {
  const [savedRecepiess, setSavedRecepies] = useState([]);
  const userID = useGetUserId();
  useEffect(() => {
    const fetchSavedRecepies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recepies/savedRecepies/${userID}`
        );  
        setSavedRecepies(response.data.savedRecepies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSavedRecepies();
  }, []);
  return (
    <div>
      <h1>Saved Recepies</h1>

      <ul>
      if(!savedRecepies){
        console.log("nothing in the saved recepies")
      }
        {savedRecepiess.map((recepie) => (
          <li key={recepie._id}>
            <div>
              <h2>{recepie.name}</h2>
            </div>
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

export default SavedRecepies;
