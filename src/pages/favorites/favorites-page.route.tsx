import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { FavoritesPage } from './favorites-page.ui';

export const favoritesPageRoute:RouteObject = {
    path:pathKeys.favorites(),
    element:createElement(FavoritesPage),
}

