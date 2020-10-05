import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

storiesOf('Home', module)
  .addDecorator(Wrapper)
  .add('Welcome to Drupal Twig with Storybook', () => `
    <div>
      <h1>A simple working implementation</h1>
      <p>
        This is the style guide for using Drupal with Storybook
      </p>
    </div>
  `);
