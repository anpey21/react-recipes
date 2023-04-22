import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import {GiNoodles, GiChopsticks, GiChefToque} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';


function Category() {
  return (
    <Navbar>
      <Logo to = "/">
        <h1>Flavagram</h1>
        <GiChefToque className ="icons" />
      </Logo>
      <NavLinks>
      <Item to = "/cuisine/American">
        <FaHamburger
        style={{
          color: 'var(--font-brown)',
          fontSize: '1rem',
        }} />
        <p>American</p>
      </Item>
      <Item to = "/cuisine/Italian">
        <FaPizzaSlice
        style={{
          color: 'var(--font-brown)',
          fontSize: '1rem',
        }} />
        <p>Italian</p>
      </Item>
      <Item to = "/cuisine/Thai">
        <GiNoodles
          style={{
            color: 'var(--font-brown)',
            fontSize: '1rem',
          }}
        />
        <p>Thai</p>
      </Item>
      <Item to = "/cuisine/Japanese">
        <GiChopsticks
        style={{
          color: 'var(--font-brown)',
          fontSize: '1rem',
        }} />
        <p>Japanese</p>
      </Item>
      </NavLinks>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  padding: .6rem;
  background: var(--teal-gradient);
  a {
    
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-right: 5px;
    text-decoration: none;
    color: var(--font-brown);
    :hover {
      trasition: filter 0.3s ease-in-out;
      color: beige;
   }
   p {
    font-size: .8rem;
    text-align: center;

   }

  h1 {
    font-size: 3rem;
    font-family: var(--header-font);
    margin-left: 1rem;
    }
    .icons {
      font-size: 2rem;
    }
    .icons:hover {
      trasition: filter 0.3s ease-in-out;
      color: beige;
    }
  
  /* Make responsive for mobile */
  @media (max-width: 480px) {

    h1 {
      font-size: 1.5rem;
    }
   p {
      font-size: .6rem;
  }
`;
 const Item = styled(NavLink)`
  padding-left: 2rem;
  @media (max-width: 768px) {
    padding: .5rem;
  }
}
`;
const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 4rem;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    padding-right: 0;
  }

}`
const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export default Category;
