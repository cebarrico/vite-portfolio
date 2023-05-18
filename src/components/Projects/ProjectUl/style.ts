import styled from "styled-components";

export const UlStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  max-width: 115rem;
  justify-content: center;
  margin-top: 5rem;
  gap: 3rem;

  .first-project {
    width: 80%;
    height: 50rem;
    border: 0.1rem solid var(--color-purple-800);
    box-shadow: 0 0 1rem var(--color-purple-800);
    animation: glow-animation 1.5s ease-in-out infinite;
  }

  li {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
    flex-shrink: 0;
    width: 20rem;
    height: 20rem;
    transition: transform 0.3s ease-in-out;
    position: relative;

    border-radius: 2rem;
    /* overflow: hidden; */
    list-style-type: none;
    transform-style: preserve-3d;
  }

  .title {
    position: absolute;
    display: none;
    text-align: center;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(36, 36, 36, 0.6);
    backdrop-filter: blur(0.17rem);
    font-size: 2.2rem;
    padding: 0.5rem;
  }

  .title > span {
    color: var(--color-purple-800);
  }

  .techs-container {
    display: none;
  }

  .first-project > .techs-container {
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    width: 6rem;
    flex-direction: column;
    background-color: rgba(143, 0, 255, 0.5);
    backdrop-filter: blur(1rem);
    padding: 1rem;
    justify-content: space-around;
    top: -0.1rem;
    left: -6rem;
    transition: transform 1s ease-in-out;
  }
  .techs-container > img {
    width: 5rem;
  }

  .links {
    position: absolute;
    display: none;
    background-color: rgba(36, 36, 36, 0.9);
    backdrop-filter: blur(0.17rem);
    padding: 1rem;
    justify-content: space-around;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: transform 1s ease-in-out;
    border-radius: 0 0 2rem 2rem;
  }

  li > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    border-radius: 2rem;
  }

  .first-project:hover,
  li > img:hover {
    border-radius: 0 2rem 2rem 2rem;
  }

  .first-project:hover > .techs-container {
    display: flex;
    transition: transform 1s ease-in-out;
    z-index: 3;
    border: 0.1rem solid var(--color-purple-800);
    box-shadow: 0 0 1rem var(--color-purple-800), none 0 0 0;
    animation: glow-animation 1.5s ease-in-out infinite;
    border-radius: 2rem 0 0 2rem;
    border-right: 0.1rem solid rgb(36, 36, 36);
  }

  .first-project:hover > .links {
    display: flex;
    transition: transform 1s ease-in-out;
    z-index: 2;
    border: 0.1rem solid var(--color-purple-800);
    box-shadow: 0 0 1rem var(--color-purple-800);
    animation: glow-animation 1.5s ease-in-out infinite;
  }

  .first-project:hover > .title {
    display: inline;
    transition: transform 1s ease-in-out;
    z-index: 2;
    border: 0.1rem solid var(--color-purple-800);
    box-shadow: 0 0 1rem var(--color-purple-800);
    animation: glow-animation 1.5s ease-in-out infinite;
  }

  @media (max-width: 800px) {
    width: 100%;
    .first-project {
      width: 100%;
      height: 37.5rem;
    }
    .first-project > img {
      object-fit: fill;
    }
    li {
      width: 11.5rem;
      height: 10rem;
    }
  }
  @keyframes glow-animation {
    0% {
      box-shadow: 0 0 1rem var(--color-purple-800);
    }
    50% {
      box-shadow: 0 0 2rem var(--color-purple-800);
    }
    100% {
      box-shadow: 0 0 1rem var(--color-purple-800);
    }
  }
`;
