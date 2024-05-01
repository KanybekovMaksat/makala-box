import { Container } from '@mui/material';
import { ArticlesList } from '~widgets/articles-list';

export function FavoritesPage() {
  return (
    <Container maxWidth="lg" className="mx-5 md:mx-auto my-20">
      <h2 className="mt-14 mb-5 text-2xl font-bold">Ваши избранные статьи</h2>
      <ArticlesList fetchType={true} />
    </Container>
  );
}
