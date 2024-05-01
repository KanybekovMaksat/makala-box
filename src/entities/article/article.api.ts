import $api from '~shared/api';
import { ArticlesList, Article, CreateArticleDto } from './article.types';

export function getArticleQuery() {
  return $api.get<ArticlesList>('posts');
}

export function getArticleDetailsQuery(id: number) {
  return $api.get<Article>(`posts/${id}`);
}

export function updateViewQuery(id: number) {
  return $api.get(`posts/update-view/${id}`);
}

export function likeArticleQuery(id: number) {
  return $api.get(`posts/like/${id}`);
}

// export function createArticleMutation(params: { article: CreateArticleDto }) {
//   return $api.post(`posts/`, params.article);
// }

export function createArticleMutation(props: CreateArticleDto = {}) {
  return $api.post(`posts/`, props);
}

export function favoriteArticleQuery(id: number) {
  return $api.get(`users/favorite/${id}/`);
}

export function getFavoriteArticle() {
  return $api.get('users/favorite');
}
