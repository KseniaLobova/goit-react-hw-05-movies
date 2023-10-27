import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Link, Navigation, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
