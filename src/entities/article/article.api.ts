import $api from '~shared/api';
import {
  ArticlesList,
  Article,
  CreateArticleDto,
  CreateBox,
  AddArticleBoxDtoSchema,
} from './article.types';
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

export function createBox(params: { box: CreateBox }) {
  return $api.post(`articles/boxs/me/`, params.box);
}

export function editArticle(props: any = {}) {
  const { data } = props;

  const formData = new FormData();
  for (const key in data) {
    if (data[key] instanceof File) {
      formData.append(key, data[key]);
    } else {
      formData.append(key, data[key]);
    }
  }

  return $api.patch(`articles/me/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
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

export function getArticleBoxes() {
  return $api.get('articles/boxs/me/');
}
export function getArticleBoxesAll() {
  return axios.get(`${API_URL}articles/boxs/`);
}
export function getDetailBox(id: number) {
  return axios.get(`${API_URL}articles/boxs/${id}/`);
}

export function addArticleInBox(data: { id: number; articleId: number }) {
  const { id, articleId } = data;

  return $api.post(`articles/boxs/me/${id}/add_or_remove_article/`, {
    articleId, 
  });
}
