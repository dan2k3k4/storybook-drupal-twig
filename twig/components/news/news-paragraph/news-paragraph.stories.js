import {
  storiesOf,
} from '@storybook/html';

import NewsParagraph from './news-paragraph.html.twig';
import {
  newsParagraphData,
} from './news-paragraph.data';
import Wrapper from '../../../../utils/storybook/decorators/Wrapper';

storiesOf('Components/Components/News', module)
  .addDecorator(Wrapper)
  .add('Paragraph', () => NewsParagraph({
    ...newsParagraphData,
  }));
