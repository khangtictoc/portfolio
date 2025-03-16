import styled from 'styled-components';

const FlipCardWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 250px;
    height: 320px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: left;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid white;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(120deg, #4b6cb7 0%, #182848 100%);
    color: white;
    font-family: "Raleway", serif;
  }

  .flip-card-back {
    background: linear-gradient(120deg, #4b6cb7 0%, #182848 100%);
    color: white;
    transform: rotateY(180deg);
    font-family: "Raleway", serif;
  }`;

export default FlipCardWrapper;