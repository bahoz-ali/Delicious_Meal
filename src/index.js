import './normalize.css';
import {
  displayAllMeals,
  displayMealCountInHeader,
  toggleHeart,
  updateDetailPopupMeal,
  updateHeartLikes,
} from './utils';
import './style.css';
import { increaseLike } from './service';

const popupSection = document.querySelector('.popup-section');
const mealList = document.querySelector('.meal_list');
const closePopupBtn = document.querySelector('#close_popup');

document.addEventListener('DOMContentLoaded', () => {
  displayMealCountInHeader();
  displayAllMeals();
});

mealList.addEventListener('click', async (event) => {
  const target = event.target;

  if (target.id === 'comment_btn') {
    const mealId = target.dataset.idmeal;

    updateDetailPopupMeal(mealId);
    popupSection.classList.add('popup--open');
  } else if (target.id === 'heart_btn') {
    updateHeartLikes(target);

    const mealId = target.dataset.idmeal;
    increaseLike(mealId);
  }
});

closePopupBtn.addEventListener('click', () => {
  popupSection.classList.remove('popup--open');
});
