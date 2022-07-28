import { numberComments } from '../src/service.js';

const comments = [
  {
    creation_date: '2022-07-27',
    comment: 'How much is that ?',
    username: 'james',
  },
  {
    username: 'Rodi',
    creation_date: '2022-07-27',
    comment: 'I tasted that, it was good.',
  },
  {
    username: 'samuel',
    creation_date: '2022-07-27',
    comment: 'I love Kapsalon.',
  },
  {
    username: 'oran',
    creation_date: '2022-07-27',
    comment: 'nice food',
  },
  {
    username: 'oran',
    creation_date: '2022-07-27',
    comment: 'nice food',
  },
  {
    comment: 'nice food',
    creation_date: '2022-07-27',
    username: 'oran',
  },
  {
    creation_date: '2022-07-27',
    comment: 'nice food',
    username: 'oran',
  },
  {
    username: 'oran',
    creation_date: '2022-07-27',
    comment: 'nice food',
  },
];

describe('test comments', () => {
  it('shoud return the number of the comments right', () => {
    expect(numberComments(comments)).toBe(8);
  });
});
