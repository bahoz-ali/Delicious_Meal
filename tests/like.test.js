import { getOneMealLikes, numberLikes } from '../src/service';

const likes = [
  {
    item_id: 1,
    likes: 10,
  },
];

// jest.mock('../src/service.js');

describe('test likes', () => {
  it('should return the number of the likes right',  () => {
    const result =  numberLikes(likes[0]);

    expect(result).toBe(10);
  });
});
