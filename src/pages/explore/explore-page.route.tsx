import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { ExplorePage } from './explore-page.ui';

export const explorePageRoute: RouteObject = {
  path: pathKeys.explore(),
  element: createElement(ExplorePage)
};
