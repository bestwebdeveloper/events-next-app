import * as Styled from './styles';

interface HeaderProps {
  onLogOut: () => void;
}

export const Header = ({ onLogOut }: HeaderProps): JSX.Element => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderInner>
        <Styled.LogOutButton onClick={onLogOut}>Log Out</Styled.LogOutButton>
      </Styled.HeaderInner>
    </Styled.HeaderWrapper>
  );
};
