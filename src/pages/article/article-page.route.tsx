import { createElement } from 'react';
import { RouteObject, redirect } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { ArticlePage } from './article-page.ui';

export const articlePageRoute: RouteObject = {
  path: 'article',
  children: [
    { index: true, loader: async () => redirect(pathKeys.page404()) },
    { path: ':id', element: createElement(ArticlePage) },
  ],
};
