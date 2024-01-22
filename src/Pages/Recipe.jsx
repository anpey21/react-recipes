import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("ingredients");
  let params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const check = localStorage.getItem(params.id);
      if (check) {
        setDetails(JSON.parse(check));
        return;
      }
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=118a264c89874b5889a1e38e60b518cd`
        );
        const details = await data.json();
        setDetails(details);
        localStorage.setItem(params.id, JSON.stringify(details));
    }
    fetchDetails();
  }, [params.id]);
  
  const text = details.instructions;
const regex = /(<([^>]+)>|\.(?=\S)|([A-Z][^.!?]*)(?=\s|$))/gi;
let result = text ? text.replace(regex, "$1 ") : "";

if (!result.endsWith(".") && !result.endsWith("!") && !result.endsWith("?")) {
  result += ".";
}

  
  return (
    <DetailsWrapper key= {details.id}>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <ButtonWrap>
          <Button className={activeTab === 'ingredients' ? 'active' : ''} 
          onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </Button>
        
          <Button className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </Button>
        </ButtonWrap>
        {activeTab === 'ingredients' && (
        <ul>
          {details.extendedIngredients && details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.original}
            </li>
          ))}
        </ul>
        )}
      {activeTab === 'instructions' && (
       <div>
        <h3>
          {result}
        </h3>
       </div>
      )}
  
      </Info>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 5rem 10rem;
  .active {
    background: transparent;
    border: 3px solid teal;
    color: var(--font-brown);
  }
  img {
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    max-width: 300px;
    height: auto;
  }
  h2 {
    margin-bottom: 2rem;
    font-weight: 200;
    color: teal;
    text-align: center;
    @media (max-width: 768px) {
      font-size:1rem;
    
    }
  }
  

  li {
    font-size: .8rem;
    line-height: 2.5rem;
    text-align: left;
  }
  ul {
    margin-top: 2rem;
    
  }
  @media (max-width: 1020px) {
    flex-direction: column;
    margin: 5rem 0rem 2rem 0rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
      max-width: 60%;
      height: auto;
    } 
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid teal;
  border-radius: 5px;
  margin: 1rem;
  max-width: 70%;
  max-height: 8vh;
  font-weight: bold;
  color: teal;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media (max-width: 1020px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: .8rem;
    padding: .5rem 1rem;
    margin: .5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;
  margin-left: 10rem;
  h3 {
    font-size: 1rem;
    font-weight: 200;
    font-style: italic;
  }
  @media (max-width: 1020px) {
    margin: 0;
    padding: 2rem;
    h3 {
      font-size: .8rem;
    }
  }
  `;

  const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%; 
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
`;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 100%;
//   margin: 1rem;
//   line-height: 2rem;
//   font-weight: 200;
// }
// `;
export default Recipe;
