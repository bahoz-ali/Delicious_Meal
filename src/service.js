import { API } from './variables';

export const getMeals = async () => {
  try {
    const response = await fetch(API.searchMeals);
    const data = await response.json();

    return data.meals;
  } catch (error) {
    return [];
  }
};

export const getOneMeal = async (mealId) => {
  const endpoint = `${API.baseMealUrl}/lookup.php?i=${mealId}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return data.meals[0];
  } catch (error) {
    return null;
  }
};

// comment and rating.