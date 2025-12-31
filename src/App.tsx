import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/';
import InnovationPage from './pages/InnovationPage'
import ImpactPage from './pages/ImpactPage';
import CompetitivePage from './pages/CompetitivePage';
import InvestorPage from './pages/InvestorPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
});

const innovationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/innovation',
  component: InnovationPage,
});

const impactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/impact',
  component: ImpactPage,
});

const competitiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/competitive',
  component: CompetitivePage,
});

const investorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/investor',
  component: InvestorPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$postId',
  component: BlogPostPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  innovationRoute,
  impactRoute,
  competitiveRoute,
  investorRoute,
  blogRoute,
  blogPostRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
