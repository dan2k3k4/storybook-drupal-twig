import { storiesOf } from '@storybook/html';
// eslint-disable-next-line import/no-unresolved
import Wrapper from '@decorators/Wrapper';

storiesOf('Components/Buttons/Default', module)
  .addDecorator(Wrapper)
  .add('White', () => '<button class="button">Click me</button>')
  .add('Blue', () => '<button class="button button--blue">Click me</button>')
  .add('Blue Outline', () => '<button class="button button--blue button--outline">Click me</button>')
  .add('Grey', () => '<button class="button button--grey">Click me</button>')
  .add('Light grey', () => '<button class="button button--light-grey">Click me</button>')
  .add('Light grey Outline', () => '<button class="button button--light-grey button--outline">Click me</button>')
  .add('Wide', () => '<button class="button button--wide">Click me</button>')
  .add('Checkbox', () => '<span class="button button--checkbox"><input type="checkbox" id="checkboxName" name="checkboxName"><label for="checkboxName">Click me</label></span>')
  .add('Radio button', () => '<span class="button button--radio"><input type="radio" id="radioName" name="radioName" value=""><label for="radioName">Click me</label></span>')
  .add('Video button', () => '<button class="button button--icon video">Watch video</button>')
  .add('Pdf button', () => '<button class="button button--icon pdf">Download pdf</button>')
  .add('Link button', () => '<button class="button-link">Back to previous</button>');

storiesOf('Components/Buttons/Small', module)
  .addDecorator(Wrapper)
  .add('White', () => '<button class="button button--small">Click me</button>')
  .add('Blue', () => '<button class="button button--blue button--small">Click me</button>')
  .add('Grey', () => '<button class="button button--grey button--small">Click me</button>')
  .add('Light grey', () => '<button class="button button--light-grey button--small">Click me</button>')
  .add('Mail', () => '<button type="submit" value="Submit" class="button button--small button--icon mail">Submit</button>');

storiesOf('Components/Buttons/Big', module)
  .addDecorator(Wrapper)
  .add('White', () => '<button class="button button--big">Click me</button>')
  .add('Blue', () => '<button class="button button--blue button--big">Click me</button>')
  .add('Grey', () => '<button class="button button--grey button--big">Click me</button>')
  .add('Light grey', () => '<button class="button button--light-grey button--big">Click me</button>');

storiesOf('Components/Buttons', module)
  .add('Sidebar widget', () => '<a class="sidebar-widget button button--small button--orange" href="#"><span class="sidebar-widget__icon icon medium phone-white"></span><span class="sidebar-widget__text">Contact us</span></a>');
