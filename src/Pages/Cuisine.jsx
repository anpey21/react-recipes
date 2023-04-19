import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  const getCuisine = async (name) => {
    const check = localStorage.getItem('cuisine')
    if (check) {
      setCuisine(JSON.parse(check))
    } else {
    const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=118a264c89874b5889a1e38e60b518cd&cuisine=${name}&number=12`)
    const recipes = await data.json()
    localStorage.setItem('cuisine', JSON.stringify(recipes.results))
    setCuisine(recipes.results)
    }
  }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  return <Grid>
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
}
`
const Card = styled.div`
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: .8rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
   :hover {
    background-color: white;
    color: teal;
    
  }
  img {
    width: 100%;
    border-top-left-radius: .8rem;
    border-top-right-radius: 1rem;
    :hover {
      filter: brightness(0.8);
      transition: all 0.3s ease-in-out;
    }
  }

  
  a {
    text-decoration: none;
  }
  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    text-align: center;
    padding: 1rem;
  }
`

/* pushing with a new branch */
export default Cuisine
