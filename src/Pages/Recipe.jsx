import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from 'react';

const Recipe = () => {

  const [details, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const check = window.localStorage.getItem(params.id)
    if (check) {
      setDetails(JSON.parse(check))
    } else {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=118a264c89874b5889a1e38e60b518cd`
      );
    
  const detailData = await data.json();
  setDetails(detailData);
  window.localStorage.setItem(params.id, JSON.stringify(detailData))
  };
}
  
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  const text = details.summary;
  const regex = /(<([^>]+)>)/gi;
  const result = text.replace(regex, "");

  return (
    <DetailsWrapper>
      <h1>{details.title}</h1>
      <RecipeCard>
        <img src={details.image} alt={details.title} />
        <p>{result}</p>
      </RecipeCard>
    </DetailsWrapper>
    
  );
}

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 70%;
  h1 {
    font-size: 2rem;
    margin: 8rem 0;
    font-family: var(--header-font);
  }
`;

const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;
  border: 1px solid red;
  width: 100%
  img {
    width: 100%;
    height: auto;
  }
  p {
    margin: 2rem 0;
    line-height: 1.2rem;
    font-style: italic;
    color: teal;
  }
`;

export default Recipe;
