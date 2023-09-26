import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageLoading from '../components/PageLoading';
import PageWrapper from '../views/PageWrapper';

import paths from './paths';

const Welcome = lazy(() => import('../pages/Welcome'));
const IntroGame = lazy(() => import('../pages/IntroGame'));
const PlayGame = lazy(() => import('../pages/PlayGame'));
const PageNotFound = lazy(() => import('../pages/NotFound'));

interface Routes {
   path: string;
   element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <PageWrapper>
         <Component />
      </PageWrapper>
   </Suspense>
);

const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Welcome) },
   { path: paths.INTRO_GAME, element: getRouteElement(IntroGame) },
   { path: paths.PLAY_GAME, element: getRouteElement(PlayGame) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
];

export default createBrowserRouter(routes);