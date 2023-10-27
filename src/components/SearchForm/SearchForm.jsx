import { Formik } from 'formik';
import { FiSearch } from 'react-icons/fi';
import { Searchform, Input, Btn, Container } from './SearchForm.styled';

export const SearchForm = ({ onChange }) => {
  return (
    <Container>
      <Formik
        initialValues={{ text: '' }}
        onSubmit={(values, action) => {
          onChange(values.text);
        }}
      >
        <Searchform>
          <Input
            type="text"
            name="text"
            placeholder="Search movie"
            autoComplete="off"
            autoFocus
          />
          <Btn type="submit">
            <FiSearch />
            {/* <BtnLabel> Search</BtnLabel> */}
          </Btn>
        </Searchform>
      </Formik>
    </Container>
  );
};
