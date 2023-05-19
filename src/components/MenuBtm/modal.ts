import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  bottom: -5.2rem;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  background: rgba(26, 4, 74, 0.22);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(26, 4, 74, 0.3);
  z-index: 2;
`;
