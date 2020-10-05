export const imageEntity = {
  url: 'https://via.placeholder.com/640x360?text=16:9',
  alt: 'This is an alt text.',
  freeAspectRatioLarge: {
    url: 'https://via.placeholder.com/1600x1000',
    height: 1000,
    width: 1183,
  },
  rectangularLarge: {
    url: 'https://via.placeholder.com/1000x650',
    height: 900,
    width: 1600,
  },
  squareLarge: {
    url: 'https://via.placeholder.com/1000x650',
    height: 900,
    width: 900,
  },
  squareMedium: {
    url: 'https://via.placeholder.com/1000x650',
    height: 450,
    width: 450,
  },
  squareSmall: {
    url: 'https://via.placeholder.com/1000x650',
    height: 200,
    width: 200,
  },
  freeAspectRatioThumb: {
    url: 'https://via.placeholder.com/210x158',
    height: 158,
    width: 210,
  },
  freeAspectRatioMedium: {
    url: 'https://via.placeholder.com/576x150',
    height: 150,
    width: 576,
  },
  freeAspectRatioTablet: {
    url: 'https://via.placeholder.com/1024x267',
    height: 267,
    width: 1024,
  },
};

export const mediaImage = {
  entity: {
    mediaImage: {
      ...imageEntity,
    },
    image: {
      ...imageEntity,
    },
  },
};
