import { ROUTES, prefixPath } from '@/shared/constants';
import { DefaultLayout } from '@/widgets/layout';
import loadable from '@loadable/component';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const Home = loadable(() => import('@/pages/home'));
const BlogDetail = loadable(() => import('@/pages/blog-detail'));
const CreateBlog = loadable(() => import('@/pages/create-blog'));
const UpdateBlog = loadable(() => import('@/pages/update-blog'));

const routeList: RouteObject[] = [
  {
    path: prefixPath,
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.BLOG_DETAIL,
        element: <BlogDetail />,
      },
      {
        path: ROUTES.EDIT_BLOG(),
        element: <UpdateBlog />,
      },
      {
        path: ROUTES.CREATE_BLOG,
        element: <CreateBlog />,
      },
    ],
  },

  {
    path: '*',
    element: (
      <Navigate
        to={ROUTES.ERROR}
        replace
      />
    ),
  },
];

export const AppRouter = () => {
  const element = useRoutes(routeList);
  return element;
};
