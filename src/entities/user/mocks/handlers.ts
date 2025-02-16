import { http } from 'msw';
import { getUsersResolver } from './resolvers';

const BASE_END_POINT = `${import.meta.env.VITE_API_URL}/users`;

export const usersHandlers = [http.get(BASE_END_POINT, getUsersResolver)];
