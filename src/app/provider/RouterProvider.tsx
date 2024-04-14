import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';
import GenericLayout from '~pages/Layout';
import { feedPageRoute } from '~pages/feed';
import { homePageRoute } from '~pages/home';
import { favoritesPageRoute } from '~pages/favorites';
import { articlePageRoute } from '~pages/article';


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
        children: [homePageRoute, feedPageRoute, favoritesPageRoute, articlePageRoute],
      },
    ],
  }
]);

export function BrowserRouter() {

  return <RouterProvider  router={router} />;
}
