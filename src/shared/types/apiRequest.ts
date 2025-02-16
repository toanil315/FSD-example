import { SORT_ORDER_ENUM } from '../constants';

export interface GetListParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: SORT_ORDER_ENUM;
  search?: string;
}
