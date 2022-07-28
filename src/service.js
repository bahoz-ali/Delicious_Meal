import { API } from './variables';

export const getMeals = async () => {
  try {
    const response = await fetch(API.searchMeals);
    const data = await response.json();

    return data.meals;
  } catch (error) {
    return [];
  }
};

export const getOneMeal = async (mealId) => {
  const endpoint = `${API.baseMealUrl}/lookup.php?i=${mealId}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return data.meals[0];
  } catch (error) {
    return null;
  }
};

// comment and rating.

export const getAllLikes = async () => {
  try {
    const response = await fetch(API.endPointLikes);
    const likes = await response.json();
    return likes;
  } catch (error) {
    return [];
  }
};

export const getOneMealLikes = async (id) => {
  const likes = await getAllLikes();

  let result = likes.find((o) => {
    return +o.item_id === +id;
  });

  if (!result) return 0;

  return result && typeof result.likes === 'number' ? result.likes : 0;
};

export const increaseLike = async (idMeal) => {
  if (!idMeal) return;

  const data = { item_id: idMeal };

  const fetchContent = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  await fetch(API.endPointLikes, fetchContent);
};

export const getOneMealComments = async (idMeal) => {
  if (!idMeal) return;

  try {
    const response = await fetch(`${API.endPointComments}?item_id=${idMeal}`);
    const comments = await response.json();

    return comments;
  } catch (error) {
    return [];
  }
};

export const addComment = async (commentObj) => {
  if (!commentObj) return;

  try {
    const fetchContent = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentObj),
    };

    await fetch(API.endPointComments, fetchContent);
  } catch (error) {}
};
