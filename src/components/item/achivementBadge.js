import styled from 'styled-components';

const AchievementBadgeWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-weight: 900;
    color: white;
    position: relative;
    transition: all 1s ease;
    text-align: center;
  }

  .container__star {
    transition: all .7s ease-in-out;
  }

  .first {
    position: absolute;
    top: 20px;
    left: 50px;
    transition: all .7s ease-in-out;
  }

  .svg-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    fill: white;
    z-index: 1;
  }

  .star-eight {
    background: #1f7af5;
    width: 40px;
    height: 40px;
    position: relative;
    text-align: center;
    animation: rot 3s  infinite;
  }

  .star-eight::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    background: #1f7af5;
    transform: rotate(135deg);
  }

  .container:hover .container__star {
    transform: rotateX(70deg) translateY(250px);
    box-shadow: 0px 0px 120px -100px #1f7af5;
  }

  .container:hover .svg-icon {
    animation: grow 1s linear infinite;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(340deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes grow {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-5deg);
    }

    75% {
      transform: rotate(5deg);
    }

    100% {
      transform: scale(1) rotate(0deg);
    }
  }`;

export default AchievementBadgeWrapper;
