import './normalize.css';
import './style.css';
import {
  displayAllComments,
  displayAllMeals,
  displayMealCountInHeader,
  updateDetailPopupMeal,
  updateHeartLikes,
} from './utils.js';

import { addComment, increaseLike } from './service.js';

const popupSection = document.querySelector('.popup-section');
const mealList = document.querySelector('.meal_list');
const closePopupBtn = document.querySelector('#close_popup');
const commentForm = document.querySelector('#comment_form');
const usernameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');

document.addEventListener('DOMContentLoaded', () => {
  displayMealCountInHeader();
  displayAllMeals();
});

mealList.addEventListener('click', async (event) => {
  const { target } = event;

  if (target.id === 'comment_btn') {
    const mealId = target.dataset.idmeal;
    commentForm.setAttribute('data-idmeal', mealId);

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

commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const itemId = event.target.dataset.idmeal;
  const username = usernameInput.value;
  const comment = descriptionInput.value;

  await addComment({ item_id: itemId, username, comment });
  displayAllComments(itemId);

  commentForm.reset();
});
