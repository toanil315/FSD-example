import { http } from 'msw';
import { createBlogResolver, getBlogsResolver } from './resolvers';

const BASE_END_POINT = `${import.meta.env.VITE_API_URL}/blogs`;

export const blogHandlers = [
  http.get(BASE_END_POINT, getBlogsResolver),
  http.post(BASE_END_POINT, createBlogResolver),
];
