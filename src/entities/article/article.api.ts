import $api from '~shared/api';
import { ArticlesList, Article, CreateArticleDto } from './article.types';
import axios from 'axios';

const API_URL = 'https://api.makalabox.com/api/';

export function getArticleQuery() {
  return axios.get<ArticlesList>(`${API_URL}articles/`);
}

export function getArticleDetailsQuery(id: number) {
  return axios.get<Article>(`${API_URL}articles/${id}/`);
}

export function updateViewQuery(id: number) {
  return axios.get(`${API_URL}articles/update-view/${id}`);
}

export function getFavoriteArticles() {
  return $api.get('users/favorite/');
}

export function getWriterArticles() {
  return $api.get<ArticlesList>('articles/me/');
}

export function likeArticleQuery(id: number) {
  return $api.get(`articles/like/${id}`);
}

export function createArticleMutation(props: CreateArticleDto = {}) {
  return $api.post(`articles/me/`, props);
}

export function editArticle(props: any = {}) {
  return $api.patch(`articles/me/${String(props.data.id)}/`, props.data);
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
