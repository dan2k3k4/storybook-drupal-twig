import { teaserCollection } from '../teaser-collection/teaser-collection.data';

export const accordion = {
  items: [
    {
      id: 'options',
      title: 'I have a teaser collection of product teaser',
      content: {
        __typename: 'TeaserCollection',
        content: teaserCollection.productTeasers,
      },
    },
    {
      id: 'bundles',
      title: 'I have a teaser collection of product teaser row',
      content: {
        __typename: 'TeaserCollection',
        content: teaserCollection.productTeaserRows,
      },
    },
  ],
};
