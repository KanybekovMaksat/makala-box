import { createElement } from 'react';
import { RouteObject, redirect } from 'react-router-dom';
import { VerifyPage } from './verify-page.ui';
import { pathKeys } from '~shared/lib/react-router';

export const verifyPageRoute: RouteObject = {
  path: "activate/:uid/:token",
  element: createElement(VerifyPage),
};
