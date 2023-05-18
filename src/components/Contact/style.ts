import styled from "styled-components";

export const SectionStyle = styled.section`
  color: var(--color-blue);
  width: 80%;
  min-height: 70vh;
  display: flex;
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
    z-index: 1;
  }

  span {
    font-size: 2.2rem;
  }

  .bracket {
    color: var(--color-yellow);
  }

  .project-span {
    color: var(--color-gray-700);
    padding-left: 25px;
  }

  @media (max-width: 800px) {
    .project-text {
      align-items: center;
      justify-content: center;
    }
    .project-span {
      display: none;
    }
  }
`;
