import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  const getCuisine = async (name) => {
    const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=118a264c89874b5889a1e38e60b518cd&cuisine=${name}&number=12`)
    const recipes = await data.json()
    setCuisine(recipes.results)
  }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  return <Grid>
    <Link class="home-btn" to= "/"> HOME </Link>
    {cuisine.map((item) => {
      return (
      <Card>
        <img src={item.image} alt= "cuisine" />
        <h4>{item.title}</h4>
        <h4>{item.readyInMinutes}</h4>
      </Card>
      )
    }
    )}
  </Grid>
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
padding: 2rem;
align-items: center;
text-align: center;
.home-btn {
  text-decoration: none;
  color: var(--font-brown);
  font-family: 'Lobster Two', cursive;
  font-size: 1.2rem;
  text-align: left;
}
@media (max-width: 768px) {
  .home-btn {
    text-align: center;
    font-size: 3vw;
  }
`
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

/* pushing with a new branch */
export default Cuisine
