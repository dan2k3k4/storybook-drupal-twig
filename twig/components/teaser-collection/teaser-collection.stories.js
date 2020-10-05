import {
  storiesOf,
} from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import TeaserCollection from './teaser-collection.html.twig';
import {
  teaserCollection,
} from './teaser-collection.data';

storiesOf('Components/Components/Teaser collection', module)
  .addDecorator(Wrapper)
  .add('Product teaser', () => TeaserCollection({
    ...teaserCollection.productTeasers,
  }))
  .add('Product teaser row', () => TeaserCollection({
    ...teaserCollection.productTeaserRows,
  }));
