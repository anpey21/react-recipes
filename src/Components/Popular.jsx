import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

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
      `https://api.spoonacular.com/recipes/random?apiKey=118a264c89874b5889a1e38e60b518cd&number=12`
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
      style={{
        cursor: 'pointer'
      }}
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
                <Link className = "link" to={`/recipe/${recipe.id}`}>
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
  font-family: var(--header-font);
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
min-height: 16rem;
border-radius: 5px;
overflow: hidden;
background: white;
cursor: pointer;
border: 1px solid whitesmoke;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

  }
  p {
    display: flex;
    justify-content: center;
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
  }
`;

export default Popular;
