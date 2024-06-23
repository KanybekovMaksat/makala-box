import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { ChangePasswordPage } from './change-password.ui';

export const changePasswordPageRoute: RouteObject = {
  path: "change-password/:uid/:token",
  element: createElement(ChangePasswordPage),
};
