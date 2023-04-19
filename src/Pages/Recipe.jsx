import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from 'react';

function Recipe() {

  const [details, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=118a264c89874b5889a1e38e60b518cd`
      );
    
  const detailData = await data.json();
  setDetails(detailData);
  };
  
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <DetailsWrapper>
      <h1>{details.title}</h1>
      <img src={details.image} alt={details.title} />
      <p>{details.summary}</p>
      <p>{details.instructions}</p>
    </DetailsWrapper>
    
  );
}

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export default Recipe;
