import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  const getCuisine = async (name) => {
    const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=118a264c89874b5889a1e38e60b518cd&cuisine=${name}`)
    const recipes = await data.json()
    setCuisine(recipes.results)
    }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  return <Grid>
        {cuisine.map((item) => {
      return (
      <Card key = {item.id}>
        <Link class="link" to={`/recipe/${item.id}`}>
        <img src={item.image} alt= "cuisine" />
        <h4>{item.title}</h4>
        <h4>{item.readyInMinutes}</h4>
        </Link>
      </Card>
      )
    }
    )}
  </Grid>
}
// Comment to push again
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
padding: 2rem;
align-items: center;
text-align: center;
}

@media (max-width: 376px) {
  max-width: 90%;
  padding-right: 0;

}
`
const Card = styled.div`
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: white;
  color: teal;
   
  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    filter: brightness(0.8);
    :hover {
      filter: brightness(1.1);
      transition: all 0.3s ease-in-out;
    }
  }

  
  a {
    text-decoration: none;
    color: teal;
    :hover {
      color: var(--secondary-color);
    }
  }
  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 200;
    padding-top: 1rem;
    margin: 5px;
    
  .link {
    color: teal;
  }
  .link:hover {
    color: var(--secondary-color);
}
`

export default Cuisine
