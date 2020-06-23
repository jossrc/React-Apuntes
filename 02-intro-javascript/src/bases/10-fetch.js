const url = 'http://api.giphy.com/v1/gifs/random';
const apiKey = 'GVhUeqEt6iha2x7Jou8gDkQJWaB1KkMe';

const request = fetch(`${url}?api_key=${apiKey}`);

request
  .then((response) => response.json())
  .then(({ data }) => {
    // data.images.original.url
    const {
      images: {
        original: { url },
      },
    } = data;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
