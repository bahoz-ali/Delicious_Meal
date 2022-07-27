export const mealCard = (mealData) => {
  if (!mealData) return null;

  const { strMeal, strMealThumb, idMeal } = mealData;

  const div = document.createElement('div');
  div.setAttribute('data-idmeal', idMeal);
  div.classList.add('meal')

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
                <i class="fa-regular fa-heart"></i>
                <p>5 likes</p>
              </div>
            </div>
          </div>

          <div class="meal__body">
            <div class="btn_container">
              <button id="comment_btn" data-idmeal=${idMeal} class="btn btn--secondary" type="button">Comments</button>
            </div>

            <div class="btn_container">
              <button data-idmeal=${idMeal} class="btn btn--primary" type="button">
                Reservation
              </button>
            </div>
          </div>
  
  `;

  return div;
};
