import {
  storiesOf,
} from '@storybook/html';
import Wrapper from '../../../../utils/storybook/decorators/Wrapper';

import NewsTeaser from './news-teaser.html.twig';
import {
  newsTeaser,
} from './news-teaser.data';

storiesOf('Components/Components/News', module)
  .addDecorator(Wrapper)
  .add('Teaser', () => NewsTeaser({
    ...newsTeaser,
  }));
