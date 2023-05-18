import styled from "styled-components";
const NavStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1rem solid var(--color-purple-800);

  nav {
    width: 100%;
    max-width: 1400px;
    height: 14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 4;
  }

  img {
    width: 10rem;
    height: 10rem;
  }

  .desktop-menu {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 800px) {
    .desktop-menu {
      display: none;
    }
  }

  a {
    color: var(--color-blue);
    position: relative;
    font-size: 2.2rem;
  }

  a > span {
    color: var(--color-purple-800);
  }

  a:hover::before {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    width: 100%;
    height: 0.2rem;
    background-color: var(--color-purple-800);
    animation: underline 0.2s linear;
    box-shadow: 0 0 1.5rem var(--color-purple-800),
      0 0 1rem var(--color-purple-800), 0 0 2rem var(--color-purple-800);
  }

  a:hover > span {
    text-shadow: 0 0 1.5rem var(--color-purple-800),
      0 0 1rem var(--color-purple-800), 0 0 2rem var(--color-purple-800);
  }

  @keyframes underline {
    0% {
      width: 0;
    }
    100% {
      right: 100;
    }
  }
`;

export default NavStyle;
