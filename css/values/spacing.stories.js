import { storiesOf } from '@storybook/html';
import Wrapper from '../../utils/storybook/decorators/Wrapper';

const spacing = ['50', '100', '200', '300', '325', '400', '500', '600', '1000', '1300', '1400'];

storiesOf('Shared styles/Spacing', module)
  .addDecorator(Wrapper)
  .add('Margins', () => {
    let html = '';
    spacing.forEach(space => {
      html += `
      <div class="item">
        <div style="width: 300px; height: var(--space-${space}); background-color: var(--black)"></div>
        <p class="label p">Space ${space}</p>
      </div>
    `;
    });

    return `
      <div class="shadow-wrapper">
        ${html}
      </div>
    `;
  });
