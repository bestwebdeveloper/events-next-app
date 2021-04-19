import styled from 'styled-components';

export const HeaderInner = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: var(--min-width);
  padding: var(--gap-2) var(--gap);
`;

export const HeaderWrapper = styled.header`
  background: var(--default-background-color);
`;

export const LogOutButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  padding: var(--gap);
`;
