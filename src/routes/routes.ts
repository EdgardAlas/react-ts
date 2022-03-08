import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
);
// const lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
// );
// const lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
// );

export const routes: Route[] = [
  {
    path: '/lazy/*',
    to: '/lazy',
    Component: lazyLayout,
    name: 'Lazy Layout',
  },
  {
    path: '/no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'No lazy',
  },
];
