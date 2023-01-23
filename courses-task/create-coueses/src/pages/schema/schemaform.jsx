import React from 'react';
// import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  imgurl: Yup.string()
    .min(2, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
})