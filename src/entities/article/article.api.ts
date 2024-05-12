import $api from '~shared/api';
import { ArticlesList, Article, CreateArticleDto } from './article.types';

export function getArticleQuery() {
  return $api.get<ArticlesList>('articles/');
}

export function getFavoriteArticles() {
  return $api.get('users/favorite/');
}
export function getArticleDetailsQuery(id: number) {
  return $api.get<Article>(`articles/${id}/`);
}

export function getWriterArticles() {
  return $api.get<Article>('articles/me/');
}

export function updateViewQuery(id: number) {
  return $api.get(`articles/update-view/${id}`);
}

export function likeArticleQuery(id: number) {
  return $api.get(`articles/like/${id}`);
}

export function createArticleMutation(props: CreateArticleDto = {}) {
  return $api.post(`articles/me/`, props);
}

export function editArticle(id:number, props:any = {}) {
  return $api.patch(`articles/${id}`, props); 
}

export function favoriteArticleQuery(id: number) {
  return $api.get(`users/favorite/${id}/`);
}

export function archivedArticle(id: number) {
  return $api.patch(`articles/me/${id}/`, { status: 'archived' });
}

// export function createArticleMutation(params: { article: CreateArticleDto }) {
//   return $api.post(`articles/`, params.article);
// }

