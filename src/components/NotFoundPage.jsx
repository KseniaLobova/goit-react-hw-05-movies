import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Sorry, wrong adress. Please follow to <Link to="/">home page</Link>
    </div>
  );
}
