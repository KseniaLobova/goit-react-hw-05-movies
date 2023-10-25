import { Outlet } from 'react-router-dom';
import { Container, Link, Navigation } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </header>
      <Outlet />
    </Container>
  );
};
