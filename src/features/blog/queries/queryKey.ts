const BASE_KEY = 'blog';

export const BLOG_QUERY_KEYS = {
  list: (params?: Record<string, any>) => {
    const baseListKey = ['list', BASE_KEY];
    return params ? [...baseListKey, params] : baseListKey;
  },
  total: (search?: string) => ['total', BASE_KEY, search],
  detail: (id?: string) => ['detail', BASE_KEY, id],
};
