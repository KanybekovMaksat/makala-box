import $api from '~shared/api';

export function getOrganizationQuery() {
  return $api.get('posts/organizations/');
}
