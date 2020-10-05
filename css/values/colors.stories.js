import { storiesOf } from '@storybook/html';
import Wrapper from '../../utils/storybook/decorators/Wrapper';

const colors = [
  'dark-blue',
  'petrol',
  'blue',
  'orange',
  'black',
  'dark-grey',
  'grey',
  'light-grey',
  'lighter-grey',
  'white',
];

storiesOf('Shared styles/Colors', module)
  .addDecorator(Wrapper)
  .add('Named colors', () => {
    let colorHTML = '';
    colors.forEach(color => {
      colorHTML += `
      <div class="item">
        <div class="color ${color}"></div>
        <p class="label p">${color}</p>
      </div>
    `;
    });

    return `
      <div class="color-wrapper">
        ${colorHTML}
      </div>
    `;
  });
