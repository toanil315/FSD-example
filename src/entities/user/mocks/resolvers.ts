import { HttpResponseResolver, HttpResponse } from 'msw';
import { User } from '../types';
import { DEFAULT_LIMIT, SORT_ORDER_ENUM } from '@/shared/constants';

const MOCK_USERS = [
  {
    id: '1',
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    id: '2',
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    id: '3',
    key: '3',
    name: 'Dol',
    age: 26,
    address: '19 Downing Street',
  },
  {
    id: '4',
    key: '4',
    name: 'Lona',
    age: 58,
    address: '27 Downing Street',
  },
];

export const getUsersResolver: HttpResponseResolver = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  const sortBy = url.searchParams.get('sortBy') as keyof User | null;
  const order = url.searchParams.get('order');
  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || DEFAULT_LIMIT;
  let response = MOCK_USERS;

  if (search) {
    response = response.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (sortBy && order) {
    response.sort((a, b) => {
      if (a[sortBy] === b[sortBy]) return 0;
      if (a[sortBy] < b[sortBy]) return order === SORT_ORDER_ENUM.ASC ? -1 : 1;
      return order === SORT_ORDER_ENUM.ASC ? 1 : -1;
    });
  }

  const paginatedResponse = response.slice((page - 1) * limit, page * limit);

  return HttpResponse.json(
    {
      data: paginatedResponse,
      total: response.length,
    },
    { status: 200 },
  );
};
