import styled from 'styled-components';

export const Button = styled.button`
  background: var(--default-background-color);
  border: none;
  border-radius: 4px;
  color: var(--background-color);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  line-height: calc(2.75rem + 4px);
  margin: 0 var(--gap);
  min-width: 5rem;
  outline: none;
  padding: 0 var(--gap);

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  &[disabled] {
    opacity: 0.3;
  }

  svg {
    vertical-align: middle;
  }
`;
