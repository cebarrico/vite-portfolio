import styled from "styled-components";

export const FromStyled = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
  padding-left: 2.5rem;
  line-height: 2.9rem;
  z-index: 1;

  @media (max-width: 800px) {
    display: none;
  }

  .grey-text {
    color: var(--color-gray-700);
  }
  .purple-text {
    color: var(--color-purple-800);
  }
  .yellow-text {
    color: var(--color-yellow);
  }
  .red-text {
    color: var(--color-red);
  }
  .green-text {
    color: var(--color-green);
  }

  .code-line {
    position: absolute;
    top: 0;
    left: -5rem;
    color: var(--color-gray-700);
  }

  p {
    position: relative;
    margin: 0;
  }

  .function,
  .function-bracket {
    position: relative;
    padding-left: 3rem;
  }

  .return {
    position: relative;
    padding-left: 6rem;
  }

  .relative {
    position: relative;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    position: relative;
    display: flex;
    padding-left: 6.5rem;
  }

  input,
  textarea {
    width: 3.9rem;
    background-color: transparent;
    outline: none;
    border: none;
    color: var(--color-green);
    font-size: 1.8rem;
    padding-left: 0.5rem;
    resize: none;
  }

  textarea {
    width: 4rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-green);
    font-size: 1.8rem;
    padding-left: 0.5rem;
  }

  input:focus::placeholder,
  textarea:focus::placeholder {
    color: transparent;
    font-size: 1.8rem;
    padding-left: 0.5rem;
  }

  .send-button {
    cursor: pointer;
    margin-top: 1.5rem;
    width: 15rem;
    height: 4.5rem;
    position: relative;
    font-weight: 700;
    font-family: "Fira Code", monospace;
    color: var(--color-gray-900);
    display: grid;
    place-content: center;
    background: linear-gradient(
      rgba(85, 83, 83, 1),
      rgba(54, 53, 53, 1),
      rgba(48, 48, 48, 1)
    );
    border: 0.2rem solid #222;
    border-radius: 0.6rem;
    box-shadow: inset 0 0.5rem 0.1rem rgba(0, 0, 0, 0.35),
      0 0.5rem 0.5rem rgba(0, 0, 0, 0.5), 0 1.5rem 2.5rem rgba(0, 0, 0, 0.35);
    transition-duration: 0.3s;
    transition-duration: 0.3s;
    z-index: 1;
  }

  .send-button:hover {
    color: var(--color-gray-200);
    text-shadow: 0 0 0.5rem var(--color-gray-100),
      0 0 1rem var(--color-gray-100);
    transition: 0.2s ease-in-out;
  }

  .send-button:active {
    color: transparent;
    transform: translate(-0.3rem, 0.3rem);
    box-shadow: none;
    text-shadow: none;
    transition-duration: 0.1;
  }

  .send-button > svg {
    opacity: 0;
    position: absolute;
    top: 1.3rem;
    right: 0;
    margin-right: 2rem;
    width: 3.5rem;
    transition-duration: 0.3s;
    animation: rocket 5s ease-in-out infinite;
  }

  .send-button:focus {
    color: transparent;
    text-shadow: none;
  }

  .send-button:focus > svg {
    color: var(--color-gray-200);
    filter: drop-shadow(0 0 0.5rem var(--color-gray-100));
    opacity: 1;
    right: 24%;
  }

  @keyframes rocket {
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 0 100%;
    }
    10% {
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      transform: rotate(4deg);
    }
    80% {
      transform: rotate(-2deg);
    }
    90% {
      transform: rotate(2deg);
    }
  }
`;
