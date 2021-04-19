import styled, { css } from 'styled-components';

const input = css`
  border: 2px solid var(--border-color);
  border-radius: 4px;
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  padding: 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    border-color: var(--active-color);
    box-shadow: 0 0 0 3px var(--active-color);
  }
`;

export const Input = styled.input`
  ${input}
`;

export const Textarea = styled.textarea`
  ${input}
`;



