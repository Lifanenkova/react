import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email('Your message')
    .required(),
  password: yup
    .string()
    .matches(/^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32}$/)
    .min(8)
    .max(32)
    .required(),
});
