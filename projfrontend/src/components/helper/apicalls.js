export const getPhotos = () => {
  return fetch("https://picsum.photos/v2/list")
    .then((data) => data.json())
    .catch((err) => console.log(err));
};
