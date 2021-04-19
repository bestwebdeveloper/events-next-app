import styled from 'styled-components';

export const DateWrapper = styled.div`
  margin-right: var(--gap);
  white-space: nowrap;
`;

export const EventLink = styled.a`
  border-radius: 2px;
  display: flex;
  flex-flow: row nowrap;
  padding: var(--gap);
  text-decoration: none;

  &:hover {
    background: var(--default-background-color);
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const EventLinkTitle = styled.div`
  font-weight: bold;
`;
