import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: var(--gap) 0;
  overflow: hidden;
  padding: var(--gap);
  position: relative;
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: var(--gap) 0;
  position: relative;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
  margin: var(--gap) 0;
`;
