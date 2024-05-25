import { axiosClient } from '@/shared/libs';
import { GetListParams } from '@/shared/types';
import { BaseBlog, Blog } from '../types';

export class BlogApi {
  private static BASE_END_POINT = '/blogs';

  public static list = (params: GetListParams): Promise<Blog[]> => {
    return axiosClient.get(this.BASE_END_POINT, { params });
  };

  public static totalBlog = async (search: string): Promise<number> => {
    const response = (await axiosClient.get(this.BASE_END_POINT, {
      params: { search },
    })) as Blog[];
    return response.length;
  };

  public static getById(id: string): Promise<Blog> {
    return axiosClient.get(`${this.BASE_END_POINT}/${id}`);
  }

  public static create = (data: BaseBlog): Promise<void> => {
    return axiosClient.post(this.BASE_END_POINT, data);
  };

  public static update = (data: Blog): Promise<void> => {
    return axiosClient.put(`${this.BASE_END_POINT}/${data.id}`, data);
  };
}
