import './normalize.css';
import {
  addComment,
  getAllLikes,
  getMeals,
  getOneMeal,
  getOneMealComments,
  increaseLike,
} from './service';
import { displayAllMeals } from './startup';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  displayAllMeals();
});
