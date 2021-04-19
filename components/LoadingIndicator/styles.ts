import styled, { keyframes } from 'styled-components';

const speed = 1.5;
const rotate = keyframes`

  100% {
    transform: rotate(360deg);
  }
`;
const dash = keyframes`

  0% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -24;
  }

  100% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: -124;
  }
`;

export const Svg = styled.svg`
  animation: ${rotate} ${speed * 1.75}s linear infinite;
  height: ${p => (p.small ? '1.25rem' : '3rem')};
  transform-origin: center;
  width: ${p => (p.small ? '1.25rem' : '3rem')};
`;

export const Circle = styled.circle`
  animation: ${dash} ${speed}s ease-in-out infinite;
  stroke: var(--active-color);
  stroke-linecap: round;
`;

export const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;
