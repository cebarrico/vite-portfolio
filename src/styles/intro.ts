import styled from "styled-components";
import fpg from "../images/fpg2.png";
import fpg2 from "../images/fpc2.png";

export const MainLoadingStyle = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-purple-700);
    font-weight: 700;
    z-index: 1;
  }

  h1 {
    position: absolute;
    width: 100%;
    text-transform: uppercase;
    top: -3rem;
    left: 0;
    text-align: center;

    font-size: 3rem;
    font-family: "Press Start 2P", cursive;
    opacity: 0;
    animation: welcome 5s ease-in-out forwards;
    filter: drop-shadow(0 0 2rem var(--color-purple-800))
      drop-shadow(0 0 6.5rem var(--color-purple-800));
  }

  .finger-print {
    width: 30rem;
    height: 30rem;
    background: url(${fpg});
    background-size: 30rem;
    animation: fade-off 5s linear forwards;
  }

  .finger-print::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${fpg2});
    background-size: 30rem;
    background-repeat: no-repeat;
    animation: scan 2s linear forwards, fade-off 5s linear forwards;
  }

  .finger-print::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background: var(--color-purple-700);
    background-size: 30rem;
    filter: drop-shadow(0 0 2rem var(--color-purple-800))
      drop-shadow(0 0 6.5rem var(--color-purple-800));
    border-radius: 2rem;
    animation: scan-bar 2s linear forwards, fade-off 5s linear forwards;
  }

  h2 {
    animation: scan-text 2s ease-out;
    opacity: 0;
    font-family: "Press Start 2P", cursive;
    filter: drop-shadow(0 0 2rem var(--color-purple-800))
      drop-shadow(0 0 6.5rem var(--color-purple-800));
  }

  @keyframes fade-off {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes welcome {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    52% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes scan {
    0% {
      height: 0%;
    }

    100% {
      height: 100%;
    }
  }

  @keyframes scan-bar {
    0% {
      top: 0%;
    }
    99% {
      opacity: 1;
    }
    100% {
      top: 100%;
      opacity: 0;
    }
  }

  @keyframes scan-text {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
