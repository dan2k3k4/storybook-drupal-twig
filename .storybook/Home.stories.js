import { storiesOf } from '@storybook/html';
// eslint-disable-next-line import/no-unresolved
import Wrapper from '@decorators/Wrapper';

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
