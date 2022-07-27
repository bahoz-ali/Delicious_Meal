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

const popupSection = document.querySelector('.popup-section');
const mealList = document.querySelector('.meal_list');
const closePopupBtn = document.querySelector('#close_popup');
const commentList = document.querySelector('.comments');
const commentCount = document.querySelector('.total-comments');

document.addEventListener('DOMContentLoaded', () => {
  displayAllMeals();
});

mealList.addEventListener('click', async (event) => {
  const target = event.target;

  if (target.id === 'comment_btn') {
    const mealId = target.dataset.idmeal;
    const mealData = await getOneMeal(mealId);
    const {
      strMealThumb,
      strInstructions,
      strArea,
      strCategory,
      strMeal,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
    } = mealData;

    const imgElement = document.querySelector('#popup_img');
    const mealCountry = document.querySelector('#meal_country');
    const mealCategory = document.querySelector('#meal_cat');
    const mealIngredient = document.querySelector('#meal_ing');
    const mealName = document.querySelector('#meal_name');
    const mealDescription = document.querySelector('#meal_desc');
    const showMoreBtn = document.getElementById('show_more');

    imgElement.setAttribute('src', strMealThumb);
    mealName.innerHTML = strMeal;
    mealDescription.innerHTML = `
    ${strInstructions.substring(0, 100)}<span id="dots">....</span>
    <span id="more">${strInstructions.substring(100)}</span> 
    `;

    showMoreBtn.addEventListener('click', myFunction);

    mealCountry.innerHTML = strArea;
    mealCategory.innerHTML = strCategory;
    mealIngredient.innerHTML = `${strIngredient1}, ${strIngredient2}, ${strIngredient3}, ${strIngredient4}`;

    popupSection.classList.add('popup--open');

    // ---------- display comments ----------//
    commentList.innerHTML = '';
    const comments = await getOneMealComments(mealId);

    if (comments.error) {
      commentCount.innerHTML = 0;
      return;
    }

    commentCount.innerHTML = comments.length;

    comments.forEach((comment) => {
      const li = document.createElement('li');
      li.classList.add('comments-list');

      li.innerHTML = `
      ${comment.creation_date}  <span>${comment.username}:</span> ${comment.comment}`;

      commentList.appendChild(li);
    });
  }
});

function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('show_more');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

closePopupBtn.addEventListener('click', () => {
  popupSection.classList.remove('popup--open');
});
