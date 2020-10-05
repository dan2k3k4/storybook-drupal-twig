import { newsTeaser } from '../news-teaser/news-teaser.data';

export const newsParagraphData = {
  title: 'This is a news paragraph title',
  news: Array(4).fill({
    entity: {
      ...newsTeaser,
    },
  }),
};
