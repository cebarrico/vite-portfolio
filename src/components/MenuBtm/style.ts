import styled from "styled-components";

export const MenuContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 80px;
  align-items: center;
  position: fixed;
  right: 0;
  z-index: 2;

  @media (min-width: 800px) {
    display: none;
  }

  svg {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active svg {
    transform: rotate(90deg);
  }

  path {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  path:nth-child(1) {
    transform-origin: 36% 40%;
  }

  path:nth-child(2) {
    stroke-dasharray: 19 299;
  }

  path:nth-child(3) {
    transform-origin: 35% 63%;
  }

  path:nth-child(4) {
    stroke-dasharray: 29 299;
  }

  path:nth-child(5) {
    transform-origin: 61% 52%;
  }

  path:nth-child(6) {
    transform-origin: 62% 52%;
  }

  &.active path:nth-child(1) {
    transform: translateX(9px) translateY(1px) rotate(45deg);
    stroke: #c65f5f;
  }

  &.active path:nth-child(2) {
    stroke-dasharray: 225 299;
    stroke-dashoffset: -72px;
    stroke: #ffaa29;
  }

  &.active path:nth-child(3) {
    transform: translateX(9px) translateY(1px) rotate(-45deg);
    stroke: #c65f5f;
  }

  &.active path:nth-child(4) {
    stroke-dasharray: 225 299;
    stroke-dashoffset: -72px;
    stroke: #ffaa29;
  }

  &.active path:nth-child(5) {
    transform: translateX(9px) translateY(1px) rotate(-45deg);
    stroke: #c65f5f;
  }

  &.active path:nth-child(6) {
    transform: translateX(9px) translateY(1px) rotate(45deg);
    stroke: #c65f5f;
  }
`;
