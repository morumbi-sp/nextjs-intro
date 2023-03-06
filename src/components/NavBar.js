import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: tomato;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: ${(props) => (props.is_active === 'active' ? 'white' : 'black')};
`;

function NavBar() {
  const { route } = useRouter();
  return (
    <Nav>
      <StyledLink href='/' is_active={route === '/' ? 'active' : ''}>
        Home
      </StyledLink>
      <StyledLink href='/about' is_active={route === '/about' ? 'active' : ''}>
        About
      </StyledLink>
    </Nav>
  );
}

export default NavBar;
