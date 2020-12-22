import styled from 'styled-components';
import { Form } from 'formik';

const bg =
  'https://wallpaperforu.com/wp-content/uploads/2020/03/martin-adams-MpTdvXlAsVE-unsplash-scaled.jpg';

const BackImage = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const FormStyle = styled(Form)`
  background-color: wheat;
  display: flex;
  flex-direction: column;
  max-width: 40%;
  padding: 10px;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
`;

export default BackImage;
