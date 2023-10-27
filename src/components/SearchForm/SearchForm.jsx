// import { FiSearch } from 'react-icons/fi';

// export const SearchForm = ({ value, onChange }) => {
//   const onSubmit = evt => {
//     evt.preventDefault();
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         placeholder="What movie do you search?"
//         name="search"
//         value={value}
//         onChange={e => {
//           onChange(e.target.value);
//         }}
//       />
//       <FiSearch />
//     </form>
//   );
// };

import { Formik } from 'formik';
import { FiSearch } from 'react-icons/fi';
import { Seachbar, Searchform, Input, Btn } from './SearchForm.styled';

export const SearchForm = ({ onChange }) => {
  return (
    <Seachbar>
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
    </Seachbar>
  );
};
