import { commentComponent, instructionComponent, mealCard } from './components';
import {
  getMeals,
  getOneMeal,
  getOneMealComments,
  getOneMealLikes,
} from './service';

const mealList = document.querySelector('.meal_list');
const commentList = document.querySelector('.comments');
const commentCount = document.querySelector('.total-comments');

export const displayAllMeals = async () => {
  const meals = await getMeals();

  if (!meals) return;

  meals.forEach(async (meal) => {
    const mealLikes = await getOneMealLikes(meal.idMeal);
    meal.likes = mealLikes;

    const mealElement = mealCard(meal);
    mealList.appendChild(mealElement);
  });
};

export const displayAllComments = async (mealId) => {
  commentList.innerHTML = '';

  const comments = await getOneMealComments(mealId);
  if (comments && comments.error) {
    commentCount.innerHTML = 0;
    return;
  }
  commentCount.innerHTML = comments.length;

  comments.forEach((comment) => {
    const li = commentComponent(comment);
    commentList.appendChild(li);
  });
};

export function showMoreLessText() {
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

export const updateDetailPopupMeal = async (mealId) => {
  const imgElement = document.querySelector('#popup_img');
  const mealCountry = document.querySelector('#meal_country');
  const mealCategory = document.querySelector('#meal_cat');
  const mealIngredient = document.querySelector('#meal_ing');
  const mealName = document.querySelector('#meal_name');
  const mealDescription = document.querySelector('#meal_desc');
  const showMoreBtn = document.getElementById('show_more');

  const mealData = await getOneMeal(mealId);
  if (!mealData) return;

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

  imgElement.setAttribute('src', strMealThumb);
  mealName.innerHTML = strMeal;
  mealCountry.innerHTML = strArea;
  mealCategory.innerHTML = strCategory;
  mealDescription.innerHTML = instructionComponent(strInstructions);
  mealIngredient.innerHTML = `${strIngredient1}, ${strIngredient2}, ${strIngredient3}, ${strIngredient4}`;

  showMoreBtn.addEventListener('click', showMoreLessText);

  displayAllComments(mealId);
};

export const displayMealCountInHeader = async () => {
  const mealCount = document.querySelector('.meal_count');
  const meals = await getMeals();

  if (meals) mealCount.innerHTML = meals.length;
  else mealCount.innerHTML = 0;
};

export const toggleHeart = (target) => {
  if (target.classList.contains('fa-regular')) {
    target.classList.replace('fa-regular', 'fa-solid');
  } else {
    target.classList.replace('fa-solid', 'fa-regular');
  }
};

export const updateHeartLikes = (target) => {
  // toggleHeart(target);

  const parentHeartIcon = target.parentElement;
  const countLikes = parentHeartIcon.querySelector('#count_likes');
  countLikes.innerHTML = Number(countLikes.innerHTML) + 1;
};
