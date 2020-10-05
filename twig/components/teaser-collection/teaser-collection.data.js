const keyFeatures = [
  'Nascetur proin',
  'Sed habitasse',
  'In bibendum',
  'Diam consequat hac',
  'Sodales convallis vivamus',
];

const productTeaserRow = {
  image: {
    entity: {
      mediaImage: {
        url: 'https://via.placeholder.com/640x360?text=16:9',
        alt: 'This is an alt text.',
      },
    },
  },
  keyFeatures: keyFeatures.slice(0, 3),
  title: 'Litora rhoncus erat',
  content: [
    {
      entity: {
        __typename: 'ParagraphText',
        text: {
          processed: '<p>Tortor cum lectus est consequat aptent ut natoque diam facilisi placerat eget porttitor arcu inceptos, parturient ultricies dui vel etiam iaculis dictum sem luctus suscipit nullam magna. Mi himenaeos nascetur pharetra ad tristique tincidunt tellus natoque, lorem sem congue iaculis curae montes pulvinar aenean duis, cum pretium habitasse et bibendum vitae taciti.</p>\n',
        },
      },
    },
  ],
  productLink: '#',
};

const productTeaser = {
  ...productTeaserRow,
  metaTitle: 'Quam placerat',
  keyFeatures: keyFeatures.slice(0, 3),
  description: {
    processed: '<p>Fames justo curae amet tristique cursus himenaeos laoreet libero, neque blandit arcu in cum vulputate litora, semper risus fusce hac magna augue senectus.</p>\n',
  },
};

export const teaserCollection = {
  productTeaserRows: {
    type: 'ProductTeaserRow',
    teasers: Array(4).fill(productTeaserRow),
  },
  productTeasers: {
    type: 'ProductTeaser',
    teasers: Array(12).fill(productTeaser),
  },
};
