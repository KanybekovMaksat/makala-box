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
import { sandboxPageRoute } from '~pages/sandbox';
import { profilePageRoute } from '~pages/profile';
import { verifyPageRoute } from '~pages/verify';
import { GenericLayout, IntroLayout } from '~pages/layout';
import { editPageRoute } from '~pages/edit';

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
          profilePageRoute,
          sandboxPageRoute,
          editPageRoute
        ],
      },
      {
        element: <IntroLayout />,
        children: [registerPageRoute, loginPageRoute, verifyPageRoute],
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
