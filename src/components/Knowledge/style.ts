import styled from "styled-components";

export const SectionStyle = styled.section`
  color: var(--color-blue);
  width: 80%;
  min-height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.2rem;
  margin-top: 29rem;
  scroll-behavior: smooth;
  position: relative;

  .knowledge-text {
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
  .knowledge-span {
    color: var(--color-red);
    padding-left: 2.5rem;
  }
`;
