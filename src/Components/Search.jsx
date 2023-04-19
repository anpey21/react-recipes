import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

const [input, setInput] = useState("")
const navigate = useNavigate();

const submitHandler = (e) => {
  navigate(`/searched/${input}`)
}

  return (
    <FormStyle onSubmit={submitHandler}>
        <input 
        onChange={(e) => 
        setInput(e.target.value)}
        type="text" 
        value={input} 
        placeholder= "Search and press ENTER" 
        />
      <FaSearch class= "search" />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  display: flex;
  margin: 0;
  padding: 0;
  padding-top: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
    input {
      border: none;
      height: 2.5rem;
      width: 50%;
      text-align: center;
      color: teal;
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
      font-family: 'Poppins', sans-serif;
      font-weight: 200;
      font-size: 1rem;
      border-radius: .5rem;
      background: white;
      margin-right: 1rem;
    }
    .search {
      color: var(--font-brown);
      cursor: pointer;
    }

    input::placeholder {
      color: lightgray;
      font-style: italic;
      padding-left: 1rem;
    }

    @media (max-width: 768px) {
      input {
        width: 80%;
      }
    `;
export default Search;
