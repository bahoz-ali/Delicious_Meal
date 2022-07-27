import './normalize.css';
import { getMeals, getOneMeal } from './service';
import { displayAllMeals } from './startup';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  displayAllMeals();
});
