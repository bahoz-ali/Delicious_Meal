import { mealCard } from './components';
import { getMeals } from './service';

const mealList = document.querySelector('.meal_list');

export const displayAllMeals = async () => {
  const meals = await getMeals();

  if (!meals) return;

  meals.forEach((meal) => {
    const mealElement = mealCard(meal);
    mealList.appendChild(mealElement);
  });
};
