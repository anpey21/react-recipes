import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

  const [searched, setSearched] = useState([]);
  const params = useParams();
  const getSearched = async (name) => {
    const data = await fetch (
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=118a264c89874b5889a1e38e60b518cd&query=${name}&number=12`)
    const recipes = await data.json()
    setSearched(recipes.results)
    }
    useEffect(() => {
      getSearched(params.search)
    }, [params.search])

  return (
    <div>
      <Grid>
        {searched.map((item) => {
          return (
            <Card>
              <Link className="link" to={`/recipe/${item.id}`}>
              <img src={item.image} alt="searched" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
          )
        })}
      </Grid>
    </div>
  )

  }

  const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));
grid-gap: 2.5rem;
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
  border-radius: .8rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: white;
   
  img {
    width: 100%;
    border-top-left-radius: .8rem;
    border-top-right-radius: .8rem;
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
    padding-top: 1rem;
    font-weight: 200;
    padding-bottom: 1rem;
    margin: 5px;
    :hover {
      color: var(--secondary-color);
  }
`

export default Searched;
