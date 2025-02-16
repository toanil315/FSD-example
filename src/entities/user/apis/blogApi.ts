import { axiosClient } from '@/shared/libs';
import { GetListParams } from '@/shared/types';
import { User } from '../types';

export class UserApi {
  private static BASE_END_POINT = '/users';

  public static list = (
    params: GetListParams,
  ): Promise<{
    data: User[];
    total: number;
  }> => {
    return axiosClient.get(this.BASE_END_POINT, { params });
  };
}
