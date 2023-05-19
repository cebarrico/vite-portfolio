import styled from "styled-components";

export const SectionStyle = styled.section`
  color: var(--color-blue);
  width: 80%;
  min-height: 70vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  margin-top: 11rem;
  scroll-behavior: smooth;
  position: relative;

  .project-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  span {
    font-size: 2.2rem;
  }

  .bracket {
    color: var(--color-yellow);
    z-index: 1;
  }

  .project-span {
    color: var(--color-gray-700);
    padding-left: 2.5rem;
    z-index: 1;
  }

  .code-pets {
    position: relative;
    width: 30%;
    height: 60rem;
    display: grid;
    place-items: center;
    border-radius: 1rem;
    z-index: 1;
  }

  .code-pets > h2 {
    position: absolute;
    top: -3rem;
    right: 0;
    font-family: "Radiotechnika";
    font-size: 1.5em;
    color: var(--color-purple-800);
    white-space: nowrap;

    text-shadow: 0 0 2rem var(--color-purple-700);
  }

  .fail-light {
    font-family: "Radiotechnika";
    font-size: 1.2em;
    margin: 0;
    padding: 0;
    color: var(--color-purple-800);
    animation: fail 2s linear infinite;
  }

  @keyframes fail {
    0%,
    100% {
      color: var(--color-purple-800);
      text-shadow: 0 0 2rem var(--color-purple-700);
    }
    6% {
      color: var(--color-gray-700);
      text-shadow: none;
    }
    7% {
      color: var(--color-purple-800);
      text-shadow: 0 0 2rem var(--color-purple-700);
    }
    10% {
      color: var(--color-gray-700);
      text-shadow: none;
    }
    15% {
      color: var(--color-purple-800);
      text-shadow: 0 0 2rem var(--color-purple-700);
    }
    20% {
      color: var(--color-gray-700);
      text-shadow: none;
    }
    25% {
      color: var(--color-purple-800);
      text-shadow: 0 0 2rem var(--color-purple-700);
    }
    30% {
      color: var(--color-gray-700);
      text-shadow: none;
    }
    35% {
      color: var(--color-purple-800);
      text-shadow: 0 0 2rem var(--color-purple-700);
    }
  }

  .code-pets > img {
    width: 100%;
    height: 40.5rem;
    border-radius: 1rem;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    svg {
      padding: 0.3rem;
    }

    .github {
      color: var(--color-gray-200);
      filter: drop-shadow(0 0 0.5rem var(--color-gray-100));
      transition: 0.2s ease-in-out;
    }

    .linkedin {
      color: var(--color-blue);
      filter: drop-shadow(0 0 0.5rem var(--color-blue));
      transition: 0.2s ease-in-out;
    }

    .gmail {
      color: var(--color-red);
      filter: drop-shadow(0 0 0.5rem var(--color-red));
      transition: 0.2s ease-in-out;
    }

    .instagram {
      color: var(--color-purple-800);
      filter: drop-shadow(0 0 0.5rem #8f00ff);
      transition: 0.2s ease-in-out;
    }

    .whatsapp {
      color: var(--color-green);
      filter: drop-shadow(0 0 0.5rem var(--color-green));
      transition: 0.2s ease-in-out;
    }
    .code-pets > h2 {
      font-size: 2rem;
      top: 0;
    }
    .project-text {
      align-items: center;
      justify-content: center;
    }
    .project-span {
      display: none;
    }
    .code-pets {
      width: 100%;
    }
  }
`;
