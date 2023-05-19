import styled from "styled-components";

export const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow: hidden;
  background-color: var(--color-gray-900);
  /* z-index: 5; */

  .container {
    position: relative;
    top: -80%;
    left: -10%;
    width: 100%;
    display: flex;
    white-space: nowrap;
    padding: 1rem 0;
    font-size: 6rem;
    transform: rotate(-30deg);
  }

  .container > div {
    font-size: 1em;
    white-space: nowrap;
    animation: movement1 80s linear infinite -80s;
    animation-delay: -80s;
  }

  .container > div:nth-child(2) {
    animation: movement2 80s linear infinite;
    animation-delay: -40s;
  }

  @keyframes movement1 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes movement2 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }

  svg {
    color: var(--color-gray-850);
    padding: 0 0.5rem;
    transition: 1s;
    user-select: none;
  }

  svg:hover {
    transition: 0s;
    opacity: 0.5;
    color: var(--color-purple-800);
    filter: drop-shadow(0 0 0.5rem var(--color-purple-700))
      drop-shadow(0 0 0.5rem var(--color-purple-700));
  }
`;
