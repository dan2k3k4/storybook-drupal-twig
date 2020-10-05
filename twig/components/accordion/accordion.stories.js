import {
  storiesOf,
} from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import Accordion from './accordion.html.twig';
import {
  accordion,
} from './accordion.data';

storiesOf('Components/Components', module)
  .addDecorator(Wrapper)
  .add('Accordion', () => Accordion({
    ...accordion,
  }));
