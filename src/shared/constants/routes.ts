export const prefixPath = '';
export const ROUTES = {
  // public routes
  HOME: `${prefixPath}/`,

  BLOG_DETAIL: `${prefixPath}/blogs/:id`,

  CREATE_BLOG: `${prefixPath}/blogs/create`,

  EDIT_BLOG(id?: string) {
    return id ? `${this.BLOG_DETAIL.replace(':id', id)}/edit` : `${this.BLOG_DETAIL}/edit`;
  },

  ERROR: `${prefixPath}/404`,
};
