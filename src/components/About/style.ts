import styled from "styled-components";

export const SectionStyle = styled.section`
  color: var(--color-blue);
  width: 80%;
  min-height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.2rem;
  margin-top: 11rem;
  scroll-behavior: smooth;
  position: relative;

  .about-text {
    max-width: 69.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 1;
  }

  span {
    font-size: 2.2rem;
  }

  .bracket {
    color: var(--color-yellow);
  }

  .about-span {
    color: var(--color-red);
    padding-left: 2.5rem;
    margin-bottom: 5rem;
  }

  p {
    text-align: start;
    padding-left: 7.5rem;
    position: relative;
  }

  h1 {
    padding-left: 75px;
    font-family: "Radiotechnika";
    background: linear-gradient(
      to right,
      var(--color-purple-800),
      var(--color-purple-900)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    overflow: hidden;
    border-right: 0.3rem solid orange;
    margin: 1.5rem 0 1.5rem 0;
    white-space: nowrap;
    animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 45rem;
    }
  }
  @keyframes typing-mobile {
    from {
      width: 0;
    }
    to {
      width: 33.1rem;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--color-blue);
    }
  }

  .profile-img {
    width: 34.3rem;
    height: 36.8rem;
    border: 0.1rem solid var(--color-purple-800);
    border-radius: 1.5rem;
    z-index: 0;
    background-color: rgba(36, 36, 36, 0.4);
    backdrop-filter: blur(0.17rem);
  }

  .card {
    max-width: 34rem;
    height: 37rem;
    transition: all 0.2s;
    position: relative;
    cursor: pointer;
    z-index: 1;
  }

  .card-inner {
    width: inherit;
    height: inherit;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(0.2rem);
    border-radius: 0.8rem;
  }

  .card:hover {
    transform: scale(1.04) rotate(1deg);
  }

  .circle {
    width: 10rem;
    height: 10rem;
    background: radial-gradient(
      var(--color-purple-800),
      var(--color-purple-800)
    );
    border-radius: 50%;
    filter: drop-shadow(0 0 0.5rem #8f00ff) drop-shadow(0 0 1rem #8f00ff);
    position: absolute;

    animation: move-up6 2s ease-in infinite alternate-reverse;
  }

  .circle:nth-child(1) {
    top: -2.5rem;
    left: -2.5rem;
  }

  .circle:nth-child(2) {
    bottom: -2.5rem;
    right: -2.5rem;
    animation-name: move-down1;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    h1 {
      font-size: 2.2rem;
      animation: none;
      animation: typing-mobile 3s steps(30, end),
        blink-caret 0.5s step-end infinite;
    }
    .card {
      margin-top: 5rem;
    }
  }

  @keyframes move-up6 {
    to {
      transform: translateY(-1rem);
    }
  }

  @keyframes move-down1 {
    to {
      transform: translateY(1rem);
    }
  }
`;
