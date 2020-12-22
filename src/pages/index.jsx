import React from 'react';
import BackImage, { FormStyle, Error } from './styles';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

function Home() {
  const shema = yup.object({
    nome: yup.string().required('Campo Obrigatório'),
    color: yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = values => console.log(values);

  return (
    <>
      <BackImage>
        <div>
          <h1>Drive More Customers Through Digital</h1>
          <h5>
            We know how large objects will act, but things on a small scale.
          </h5>
          <button>Get Quote Now</button>
          <button>Learn More</button>
        </div>
      </BackImage>

      <Formik
        initialValues={{
          nome: '',
          color: '',
        }}
        validationSchema={shema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormStyle>
            <h3>Book Appointment</h3>
            <Field name="nome" placeholder="Nome" />
            {errors.nome && touched.nome ? <Error>{errors.nome}</Error> : null}

            <Field as="select" name="color">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            {errors.color && touched.color ? (
              <Error>{errors.color}</Error>
            ) : null}

            <button type="submit">ENVIAR</button>
          </FormStyle>
        )}
      </Formik>
    </>
  );
}

export default Home;
