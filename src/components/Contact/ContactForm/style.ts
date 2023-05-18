import styled from "styled-components";

export const FromStyled = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
  padding-left: 2.5rem;
  line-height: 2.9rem;

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
    width: 3.5rem;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    padding: 02rem;
    color: white;
    font-weight: 500;
    font-family: "Fira Code", monospace;
    width: 15rem;
    height: 3.5rem;
    background-color: var(--color-purple-800);
    border-radius: 1rem;
    box-shadow: -0.4rem 0.5rem 0 rgba(82, 0, 255);
    transition-duration: 0.3s;
  }

  .send-button:active {
    color: transparent;
    transform: translate(-0.3rem, 0.3rem);
    box-shadow: none;
    transition-duration: 0.1;
  }

  .send-button > img {
    opacity: 0;
    position: absolute;
    right: 0;
    margin-right: 2rem;
    width: 3.5rem;
    transition-duration: 0.3s;
  }

  .send-button:focus {
    color: transparent;
  }

  .send-button:focus > img {
    opacity: 1;
    right: 24%;
  }
`;
