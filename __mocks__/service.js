const likes = [
  {
    item_id: 1,
    likes: 10,
  },
];

export default function getAllLikes() {
  return new Promise((resolve) => {
    resolve(likes);
  });
}
