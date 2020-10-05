export const questionsAnswers = {
  __typename: 'ParagraphQuestionsAnswers',
  title: 'Content title',
  questionsAnswers: [
    {
      entity: {
        question: 'Question about something related to this product',
        answer: {
          format: 'full_html',
          processed: '<p>Answer related to something about this product</p>',
        },
      },
    },
    {
      entity: {
        question: 'Question about something related to this product #2',
        answer: {
          format: 'full_html',
          processed: '<p>Answer related to something about this product #2</p>',
        },
      },
    },
  ],
};
