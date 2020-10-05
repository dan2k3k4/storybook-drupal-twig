import {
  storiesOf,
} from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

import QuestionsAnswers from './questions-answers.html.twig';
import {
  questionsAnswers,
} from './questions-answers.data';

storiesOf('Components/Components', module)
  .addDecorator(Wrapper)
  .add('Q&A Content', () => QuestionsAnswers({
    ...questionsAnswers,
  }));
