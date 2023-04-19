import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function Popular() {

  const [popular, setPopular] = useState([]);
  

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const check = localStorage.getItem('popular')
    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=118a264c89874b5889a1e38e60b518cd&number=9`
    )
    const data = await api.json()
    localStorage.setItem('popular', JSON.stringify(data.recipes))
    setPopular(data.recipes)
    }
  }

  return (
    <Wrapper>
    <h3>Popular Picks</h3>
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
        {popular.map((recipe) => {
          return (
            <SplideSlide key = {recipe.id}>
              <Card>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
                <p>{recipe.readyInMinutes} minutes</p>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
margin: 4rem;
height: 100%;
}
h3 {
  text-align: center;
  font-family: 'Lobster Two', cursive;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
min-height: 16rem;
border-radius: 1rem;
overflow: hidden;
background: white;
border: 4px solid whitesmoke;
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
    text-align: center;
    margin: 10px;
    font-weight: bold;
    color: teal;
    
  }
`;

export default Popular;
