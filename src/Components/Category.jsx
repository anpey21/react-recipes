import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <BrowserRouter>
    <Navbar>
      <h1>
        Your Favorite
      </h1>
      <NavLink>
        <FaPizzaSlice
        style={{
          color: 'var(--font-brown)',
          fontSize: '1.5rem',
        }} />
        <p>Pizza</p>
      </NavLink>
      <NavLink>
        <FaHamburger
        style={{
          color: 'var(--font-brown)',
          fontSize: '1.5rem',
        }} />
        <p>Burgers</p>
      </NavLink>
      <NavLink>
        <GiNoodles
          style={{
            color: 'var(--font-brown)',
            fontSize: '1.5rem',
          }}
        />
        <p>Noodles</p>
      </NavLink>
      <NavLink>
        <GiChopsticks
        style={{
          color: 'var(--font-brown)',
          fontSize: '1.5rem',
        }} />
        <p>Asian</p>
      </NavLink>
    </Navbar>
    </BrowserRouter>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom right, teal, #66CCCC);
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    text-decoration: none;
    color: var(--font-brown);
    text-align: center;
  }
  h1 {
    font-size:3rem;
    font-weight: 700;
    font-family: 'Lobster Two', cursive;
  }
`;

export default Category;
