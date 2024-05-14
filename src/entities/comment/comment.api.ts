import $api from '~shared/api';
import { CreateComment } from './comment.types';

export function getComments(id: number) {
  return $api.get(`articles/${id}/comment/`);
}

export function createComment(id: number, comment: CreateComment = {}) {
  return $api.post(`articles/${id}/comment/`, { comment });
}

export function updateComment(
  articleId: number,
  commentId: number,
  comment: any = {}
) {
  return $api.patch(`aricles/${articleId}/comment/${commentId}/`, comment);
}

export function deleteComment(articleId: number, commentId: number) {
  return $api.delete(`articles/${articleId}/comment/${commentId}/`);
}
