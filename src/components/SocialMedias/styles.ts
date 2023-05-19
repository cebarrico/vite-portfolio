import styled from "styled-components";

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: 7rem;
  margin-top: 2rem;
  margin-bottom: 5rem;

  .icons-container {
    display: flex;
    width: 50%;
    max-width: 40rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    z-index: 1;
  }

  a {
    display: grid;
    place-content: center;
    padding: 0.8rem;
    background: linear-gradient(
      rgba(85, 83, 83, 1),
      rgba(54, 53, 53, 1),
      rgba(48, 48, 48, 1)
    );
    border: 0.2rem solid #222;
    border-radius: 0.6rem;
    box-shadow: inset 0 0.5rem 0.1rem rgba(0, 0, 0, 0.35),
      0 0.5rem 0.5rem rgba(0, 0, 0, 0.5), 0 1.5rem 2.5rem rgba(0, 0, 0, 0.35);
  }
  .github {
    color: var(--color-gray-900);
  }
  a:hover > .github {
    color: var(--color-gray-200);
    filter: drop-shadow(0 0 0.5rem var(--color-gray-100));
    transition: 0.2s ease-in-out;
  }

  a:hover > .linkedin {
    color: var(--color-blue);
    filter: drop-shadow(0 0 0.5rem var(--color-blue));
    transition: 0.2s ease-in-out;
  }

  a:hover > .gmail {
    color: var(--color-red);
    filter: drop-shadow(0 0 0.5rem var(--color-red));
    transition: 0.2s ease-in-out;
  }

  a:hover > .instagram {
    color: var(--color-purple-800);
    filter: drop-shadow(0 0 0.5rem #8f00ff);
    transition: 0.2s ease-in-out;
  }

  a:hover > .whatsapp {
    color: var(--color-green);
    filter: drop-shadow(0 0 0.5rem var(--color-green));
    transition: 0.2s ease-in-out;
  }

  a:active {
    box-shadow: inset 0 0.2rem 0.2rem rgba(0, 0, 0, 0.35),
      inset 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5),
      inset 0 1.5rem 2.5rem rgba(0, 0, 0, 0.35);
  }

  svg {
    color: var(--color-gray-900);
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 800px) {
    .icons-container {
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  }
`;
