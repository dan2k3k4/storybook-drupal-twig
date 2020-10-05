import { storiesOf } from '@storybook/html';
import Wrapper from '../../utils/storybook/decorators/Wrapper';

const shadows = ['10', '14'];

storiesOf('Shared styles/Shadows', module)
  .addDecorator(Wrapper)
  .add('Shadows', () => {
    let shadowHTML = '';
    shadows.forEach(shadow => {
      shadowHTML += `
      <div class="item">
        <div class="shadow shadow-${shadow}"></div>
        <p class="label p">Shadow ${shadow}%</p>
      </div>
    `;
    });

    return `
      <div class="shadow-wrapper">
        ${shadowHTML}
      </div>
    `;
  });
