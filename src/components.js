export const mealCard = (mealData) => {
  if (!mealData) return null;

  const {
    strMeal, strMealThumb, idMeal, likes,
  } = mealData;

  const div = document.createElement('div');
  div.setAttribute('data-idmeal', idMeal);
  div.classList.add('meal');

  div.innerHTML = `
  <div class="meal__header">
            <div class="meal__img">
              <img
                src="${strMealThumb}"
                alt="${strMeal}"
              />
            </div>

            <div class="meal__info">
              <p>${strMeal}</p>
              <div class="heart_count">
                <i id="heart_btn" data-idmeal=${idMeal} class="fa-solid fa-heart"></i>
                <p id="count_likes">${likes}</p>
              </div>
            </div>
          </div>

          <div class="meal__body">
            <div class="btn_container">
              <button id="comment_btn" data-idmeal=${idMeal} class="btn btn--primary" type="button">Comments</button>
            </div>
          </div>
  
  `;

  return div;
};

export const commentComponent = (comment) => {
  const li = document.createElement('li');
  li.classList.add('comments-list');

  li.innerHTML = `
      ${comment.creation_date}  <span>${comment.username}:</span> ${comment.comment}`;

  return li;
};

export const instructionComponent = (strInstructions) => `
    ${strInstructions.substring(0, 100)}<span id="dots">....</span>
    <span id="more">${strInstructions.substring(100)}</span> 
    `;
