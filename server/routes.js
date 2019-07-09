
const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

const APP_ROUTES = [
  {
    page: 'catalog',
    pattern: '/catalog'
  },
  {
    page: 'catalog',
    pattern: '/catalog/:categorySlug'
  },
  {
    page: 'products',
    pattern: '/products'
  },
  {
    page: 'product',
    pattern: '/products/:slug'
  }
  ,
  {
    page: 'jobs',
    pattern: '/jobs/:slug'
  }
];

APP_ROUTES.forEach(route => routes.add(route));
