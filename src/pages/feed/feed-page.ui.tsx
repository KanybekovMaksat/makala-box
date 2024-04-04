import { Box } from '@mui/material';
import { ArticlesList } from '~widgets/articles-list';

export function FeedPage() {
  return (
    <Box sx={{ mt: 10 }} className="flex flex-col items-center">
      <Box className="mt-5">
        <ArticlesList />
      </Box>
    </Box>
  );
}
