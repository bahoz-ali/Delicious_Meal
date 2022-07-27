import './normalize.css';
import { displayAllMeals, updateDetailPopupMeal } from './utils';
import './style.css';

const popupSection = document.querySelector('.popup-section');
const mealList = document.querySelector('.meal_list');
const closePopupBtn = document.querySelector('#close_popup');

document.addEventListener('DOMContentLoaded', () => {
  displayAllMeals();
});

mealList.addEventListener('click', async (event) => {
  const target = event.target;

  if (target.id === 'comment_btn') {
    const mealId = target.dataset.idmeal;

    updateDetailPopupMeal(mealId);
    popupSection.classList.add('popup--open');
  }
});

closePopupBtn.addEventListener('click', () => {
  popupSection.classList.remove('popup--open');
});
