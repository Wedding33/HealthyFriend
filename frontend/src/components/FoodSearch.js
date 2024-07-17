import React, { useState } from 'react';
import { getFoodCalories } from '../services/api';

function FoodSearch() {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await getFoodCalories(foodName);
      setCalories(response.calories);
      setError(null);
    } catch (err) {
      setCalories(null);
      setError('Could not fetch calorie information');
    }
  };

  return (
    <div className="FoodSearch">
      <input
        type="text"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="Enter food name"
      />
      <button onClick={handleSearch}>Search</button>
      {calories && <p>Calories: {calories}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default FoodSearch;
