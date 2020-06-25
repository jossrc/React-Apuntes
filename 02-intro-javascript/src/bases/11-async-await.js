export const getImage = async () => {
  try {
    const link = 'http://api.giphy.com/v1/gifs/random';
    const apiKey = 'w3ZV896rzjGBKOAh7mBpdrrrdzYNkEwp';

    const response = await fetch(`${link}?api_key=${apiKey}`);
    const { data } = await response.json();

    const {
      images: {
        original: { url },
      },
    } = data;

    return url;

  } catch (error) {
    // console.log(error);
    return 'No se pudo obtener la imagen'
  }
};

const renderImage = async () => {
  try {
    const img = document.createElement('img');
    img.src = await getImage();
    document.body.append(img);
  } catch (error) {
    // console.log(error);
  }
};

// renderImage();
