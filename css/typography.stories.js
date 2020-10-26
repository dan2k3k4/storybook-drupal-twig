import { storiesOf } from '@storybook/html';
// eslint-disable-next-line import/no-unresolved
import Wrapper from '@decorators/Wrapper';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

storiesOf('Shared styles/Typography', module)
  .addDecorator(Wrapper)
  .add(
    'Headings and Fonts',
    () => `
      <div class="two-columns inner wysiwyg">
        <div class="two-columns__column story-wrapper">
          <h2><u>Site styles:</u></h2>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>${lorem}</p>
          <p style="font-size: var(--font-xs)">Extra small font: ${lorem}</p>
          <p style="font-size: var(--font-xxs)">Extra, extra small font: ${lorem}</p>
        </div>
        <div class="two-columns__column story-wrapper"></div>
        <div class="two-columns__column story-wrapper">
          <h2><u>ZIAkkuratWeb Regular Web:</u></h2>
          <h1 class="regular">Heading 1</h1>
          <h2 class="regular">Heading 2</h2>
          <h2 class="h2--black regular">Heading 2 (black)</h2>
          <h3 class="regular">Heading 3</h3>
          <h4 class="regular">Heading 4</h4>
          <h5 class="regular">Heading 5</h5>
          <h6 class="regular">Heading 6</h6>
          <p class="regular">${lorem}</p>
          <p class="regular" style="font-size: var(--font-xs)">Extra small font: ${lorem}</p>
          <p class="regular" style="font-size: var(--font-xxs)">Extra, extra small font: ${lorem}</p>
        </div>
        <div class="two-columns__column story-wrapper">
          <h2><u>ZIAkkuratWeb Light Web:</u></h2>
          <h1 class="light">Heading 1</h1>
          <h2 class="light">Heading 2</h2>
          <h2 class="h2--black light">Heading 2 (black)</h2>
          <h3 class="light">Heading 3</h3>
          <h4 class="light">Heading 4</h4>
          <h5 class="light">Heading 5</h5>
          <h6 class="light">Heading 6</h6>
          <p class="light">${lorem}</p>
          <p class="light" style="font-size: var(--font-xs)">Extra small font: ${lorem}</p>
          <p class="light" style="font-size: var(--font-xxs)">Extra, extra small font: ${lorem}</p>
        </div>
        <div class="two-columns__column story-wrapper">
          <h2><u>Regular font weight:</u></h2>
          <p class="regular w100">This is 100 weight</p>
          <p class="regular w200">This is 200 weight</p>
          <p class="regular w300">This is 300 weight</p>
          <p class="regular w400">This is 400 weight</p>
          <p class="regular w500">This is 500 weight</p>
          <p class="regular w600">This is 600 weight</p>
          <p class="regular w700">This is 700 weight</p>
          <p class="regular w800">This is 800 weight</p>
          <p class="regular w900">This is 900 weight</p>
        </div>
        <div class="two-columns__column story-wrapper">
          <h2><u>Light font weight:</u></h2>
          <p class="light w100">This is 100 weight</p>
          <p class="light w200">This is 200 weight</p>
          <p class="light w300">This is 300 weight</p>
          <p class="light w400">This is 400 weight</p>
          <p class="light w500">This is 500 weight</p>
          <p class="light w600">This is 600 weight</p>
          <p class="light w700">This is 700 weight</p>
          <p class="light w800">This is 800 weight</p>
          <p class="light w900">This is 900 weight</p>
        </div>
      </div>
      <div class="story-wrapper wysiwyg">
        <h2 class="regular">Heading 2</h2>
        <p class="regular">${lorem}</p>
        <h2 class="regular">Heading 2</h2>
        <p class="regular">${lorem}</p>
        <h3 class="regular">Heading 3</h3>
        <p class="regular">${lorem}</p>
        <h3 class="regular">Heading 3</h3>
        <p class="regular">${lorem}</p>
        <h2 class="regular">Heading 2</h2>
        <h3 class="regular">Heading 3</h3>
        <p class="regular">${lorem}</p>
      </div>
    `,
  );
