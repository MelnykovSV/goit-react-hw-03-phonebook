import { Component } from 'react';
import { Container } from './Form.styled';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { IFormProps } from '../../interfaces';
const shortid = require('shortid');

export class Form extends Component<IFormProps> {
  schema = yup.object().shape({
    name: yup
      .string()
      .min(1, 'min 1!')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Is not in correct format'
      )
      .required('This field is required')
      .trim(),
    number: yup
      .string()
      .min(1, 'min 1!')
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Is not in correct format'
      )
      .required('This field is required'),
  });

  submitHandler = async (values: {
    name: string;
    number: string;
  }): Promise<void> => {
    console.log(values);
    const isValid = await this.schema.isValid(values);

    if (isValid) {
      const result = { ...values, id: shortid.generate() };

      this.props.formSubmit(result);
    }
  };

  render() {
    return (
      <Container>
        <Formik
          initialValues={{ name: '', number: '' }}
          onSubmit={this.submitHandler}
          validationSchema={this.schema}
        >
          <FormikForm>
            <label>
              Name
              <Field type="text" name="name" placeholder="Name your contact" />
              <span>
                <ErrorMessage name="name" />
              </span>
            </label>

            <label>
              Number
              <Field
                type="tel"
                name="number"
                placeholder="Paste or type the number"
              />
              <span>
                <ErrorMessage name="number" />
              </span>
            </label>

            <button type="submit">Add contact</button>
          </FormikForm>
        </Formik>
      </Container>
    );
  }
}
