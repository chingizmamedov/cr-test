import fetchService from './fetchService';

const isClient = typeof window !== 'undefined';
const API_URL =  process.env.API_URL;
const MOCHA_URL =  process.env.MOCHA_URL; // Использовать MOCHA_URL, если методы апи еще недоступны на API_URL

const fetchInstance = new fetchService({
  // baseURL: isClient ? '/api' : `${ API_URL }/api`
});

export default {
  getCategories: () => fetchInstance.request(`${ MOCHA_URL }/categories`)
};