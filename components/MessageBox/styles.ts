import styled, { css } from 'styled-components';

const defaultMessageStyle = css`
  background: var(--default-background-color);
`;
const errorMessageStyle = css`
  background: var(--danger-background-color);
`;
const infoMessageStyle = css`
  background: var(--info-background-color);
`;

export const MessageBoxWrapper = styled.div`
  border-radius: 2px;
  padding: var(--gap-3);
  margin-bottom: var(--gap-3);
  ${({ type }) => (type === 'error' ? errorMessageStyle : type === 'info' ? infoMessageStyle : defaultMessageStyle)}
`;
