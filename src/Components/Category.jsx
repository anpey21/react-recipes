import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <Navbar>
      <NavLink to = "/">
        <h1 class="logo">Flavagram</h1>
      </NavLink>
      <NavLink to = "/cuisine/Italian">
        <FaPizzaSlice
        style={{
          color: 'var(--font-brown)',
          fontSize: '1.5rem',
        }} />
        <p>Italian</p>
      </NavLink>
      <NavLink to = "/cuisine/American">
        <FaHamburger
        style={{
          color: 'var(--font-brown)',
          fontSize: '1.5rem',
        }} />
        <p>American</p>
      </NavLink>
      <NavLink to = "/cuisine/Thai">
        <GiNoodles
          style={{
            color: 'var(--font-brown)',
            fontSize: '1.5rem',
          }}
        />
        <p>Thai</p>
      </NavLink>
      <NavLink to = "/cuisine/Japanese">
        <GiChopsticks
        style={{
          color: 'var(--font-brown)',
          fontSize: '1.5rem',
        }} />
        <p>Japanese</p>
      </NavLink>
    </Navbar>
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
  
  /* Make responsive for mobile */
  @media (max-width: 768px) {
    a {
      display: inline-block;
      margin: 1rem 0;
      font-size: .8rem;
    }
    Navbar {
      position: static;
    }
    h1 {
      display: none;
    }
  }
`;

export default Category;
