import $api from '~shared/api';

export function getCategoryQuery() {
  return $api.get('posts/categories/');
}
