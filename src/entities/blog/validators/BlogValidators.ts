import i18next from 'i18next';
import * as yup from 'yup';

export const blogSchema = yup.object().shape({
  title: yup.string().required(i18next.t('form.validation.required')),
  content: yup.string().required(i18next.t('form.validation.required')),
  image: yup.string().required(i18next.t('form.validation.required')),
  body: yup.string().required(i18next.t('form.validation.required')),
});
