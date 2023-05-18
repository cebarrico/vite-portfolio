import styled from "styled-components";
const NavStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-purple-800);

  nav {
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 4;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .desktop-menu {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 800px) {
    .desktop-menu {
      display: none;
    }
  }

  a {
    color: var(--color-blue);
    position: relative;
    font-size: 22px;
  }

  a > span {
    color: var(--color-purple-800);
  }

  a:hover::before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: var(--color-purple-800);
    animation: underline 0.2s linear;
    box-shadow: 0 0 15px var(--color-purple-800),
      0 0 10px var(--color-purple-800), 0 0 20px var(--color-purple-800);
  }
  a:hover > span {
    text-shadow: 0 0 15px var(--color-purple-800),
      0 0 10px var(--color-purple-800), 0 0 20px var(--color-purple-800);
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
