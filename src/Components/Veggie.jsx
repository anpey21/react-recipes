import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

const Veggie = () => {

  const [veggie, setVeggie] = useState([]);
  

  useEffect(() => {
    getVeggie()
  }, [])

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie')
    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=118a264c89874b5889a1e38e60b518cd&number=12&tags=vegetarian`
    )
    const data = await api.json()
    localStorage.setItem('veggie', JSON.stringify(data.recipes))
    setVeggie(data.recipes)
    }
  }

  return (
    <Wrapper>
    <h3>Vegetarian Options</h3>
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '1rem',
          breakpoints: {
            768: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          }
        }}
        >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key = {recipe.id}>
              <Card>
                <Link class="link" to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt={recipe.title} />
                  <p>{recipe.title}</p>
                </Link>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
margin: 3rem;
height: 100%;
}
h3 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: var(--header-font);
`;

const Card = styled.div`
min-height: 16rem;
border-radius: 1rem;
overflow: hidden;
cursor: pointer;
background: white;
border: whitesmoke 1px solid;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.2rem;
    color: teal;
  }
  .link {
    text-decoration: none;
    color: teal;
  }

  p:hover {
    color: var(--secondary-color);
`;

export default Veggie;
