import { SliderBanner } from '~widgets/slider-banner';
import { ArticlesList } from '~widgets/articles-list';
import { NewsList } from '~widgets/news-list';

import { Box } from '@mui/material';

export function HomePage() {
  return (
    <Box
      sx={{
        maxWidth: '1100px',
        margin: '100px auto',
        padding: '35px',
        borderRadius: '5px 5px 0px 0px',
      }}
    >
      <SliderBanner />
      <ArticlesList />
      <NewsList />
    </Box>
  );
}
