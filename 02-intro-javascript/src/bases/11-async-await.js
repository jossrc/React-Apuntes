const getImage = async () => {
  try {
    const link = 'http://api.giphy.com/v1/gifs/random';
    const apiKey = 'GVhUeqEt6iha2x7Jou8gDkQJWaB1KkMe';

    const response = await fetch(`${link}?api_key=${apiKey}`);
    const { data } = await response.json();

    const {
      images: {
        original: { url },
      },
    } = data;

    return url;

  } catch (error) {
    console.log(error);
  }
};

const renderImage = async () => {
  try {
    const img = document.createElement('img');
    img.src = await getImage();
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

renderImage();
