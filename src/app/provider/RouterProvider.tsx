import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';

import { feedPageRoute } from '~pages/feed';
import { homePageRoute } from '~pages/home';
import { favoritesPageRoute } from '~pages/favorites';
import { articlePageRoute } from '~pages/article';
import { registerPageRoute } from '~pages/register';
import { loginPageRoute } from '~pages/login';
import { editorPageRoute } from '~pages/editor';
import { profilePageRoute } from '~pages/profile';
import { GenericLayout, IntroLayout } from '~pages/layout';

function BubbleError() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: <GenericLayout />,
        children: [
          homePageRoute,
          feedPageRoute,
          favoritesPageRoute,
          articlePageRoute,
          editorPageRoute,
          profilePageRoute,
        ],
      },
      {
        element: <GenericLayout />,
        children: [
          homePageRoute,
          feedPageRoute,
          favoritesPageRoute,
          articlePageRoute,
          profilePageRoute,
        ],
      },
      {
        element: <GenericLayout />,
        children: [homePageRoute, feedPageRoute],
      },
      {
        element: <IntroLayout />,
        children: [registerPageRoute, loginPageRoute],
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
