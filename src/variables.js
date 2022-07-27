const appId = 'CSZHIxGQlLcCAJ4jGdoG';
const involvementBase =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

export const API = {
  searchMeals: 'https://www.themealdb.com/api/json/v1/1/search.php?f=k',
  baseMealUrl: 'https://www.themealdb.com/api/json/v1/1',
  endPointLikes: `${involvementBase}/apps/${appId}/likes/`,
  endPointComments: `${involvementBase}/apps/${appId}/comments/`,
};
