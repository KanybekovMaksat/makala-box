import { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import { pathKeys } from '~shared/lib/react-router';
import { ProfilePage } from './profile-page.ui';

export const profilePageRoute: RouteObject = {
  path: pathKeys.profile.root(),
  element: createElement(ProfilePage),
};
