import styled from "styled-components";
const NavStyle = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  z-index: 1;
  font-family: "Radiotechnika";
  box-shadow: inset 0px -12px 12px -7px var(--color-purple-800);

  nav {
    width: 80%;
    max-width: 1400px;
    height: 14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
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

  .link-desktop {
    color: var(--color-blue);
    position: relative;
    font-size: 2rem;
  }

  .link-desktop > span {
    color: var(--color-purple-800);
  }

  .link-desktop:hover::before {
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

  .link-desktop:hover > span {
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
