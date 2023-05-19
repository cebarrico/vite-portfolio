import styled from "styled-components";

export const UlStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  margin-top: 7.8rem;

  .container-card-flip {
    border-radius: 2rem;
  }

  .card-flip {
    position: relative;
    width: 27rem;
    height: 25.8rem;
    transition: transform 0.8s;
    list-style-type: none;
    transform-style: preserve-3d;
  }

  .container-card-flip:hover > .card-flip {
    transform: rotateY(180deg);
  }

  .front-li,
  .back-li {
    box-shadow: 0 0.8rem 1.4rem 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    border: 1px solid var(--color-purple-800);
    border-radius: 2rem;
  }

  .container-card-flip:hover {
    box-shadow: 0 0 0.5rem var(--color-purple-800),
      0 0 1rem var(--color-purple-800), 0 0 1.5rem var(--color-purple-800);
    transition: 0.5s linear;
    transition-delay: 0.39s;
  }

  .back-li {
    background: linear-gradient(
      120deg,
      rgba(143, 0, 255, 0.2) 30%,
      rgba(82, 0, 255, 0.2) 88%,
      rgba(143, 0, 255, 0.2) 40%,
      rgba(82, 0, 255, 0.2) 78%
    );
    backdrop-filter: blur(0.17rem);
    color: white;
    transform: rotateY(180deg);
    width: 27rem;
    height: 25.8rem;
    text-align: center;
    overflow-y: auto;
  }

  .back-li > a {
    width: 90%;
    height: 20rem;
    font-size: 1.6rem;
    color: var(--color-blue);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    white-space: pre-wrap;

    text-overflow: ellipsis;
  }

  .front-li > img {
    width: 15.8rem;
    height: 15.8rem;
  }

  .front-li > h2 {
    font-size: 2.2rem;
  }

  .front-li > h2 > span {
    font-size: 2.2rem;
    color: var(--color-purple-800);
  }

  @media (max-width: 800px) {
    flex-direction: column;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    width: 100%;
    height: 32rem;
    margin-top: 5rem;
    gap: 3rem;

    li {
      display: inline-block;
      flex: 0 0 auto;
      left: 0;
    }
  }
`;
