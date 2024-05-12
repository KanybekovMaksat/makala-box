import { Container } from '@mui/material';
import {  FavoriteArticlesList } from '~widgets/articles-list';

export function FavoritesPage() {
  return (
    <Container maxWidth="md" className="md:mx-auto my-20">
      <h2 className="mt-14 mb-5 text-2xl font-bold text-center">Ваши избранные статьи</h2>
      <FavoriteArticlesList/>
    </Container>
  );
}
