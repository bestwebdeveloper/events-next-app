import * as Styled from './styles';

interface LoadingIndicatorProps {
  withOverlay?: boolean;
}

export function LoadingIndicator({ withOverlay = false }: LoadingIndicatorProps): JSX.Element {
  const spinner = (
    <Styled.Svg viewBox="-24 -24 48 48" small={!withOverlay}>
      <Styled.Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4" />
    </Styled.Svg>
  );

  return withOverlay ? (
    <Styled.Overlay>
      {spinner}
    </Styled.Overlay>
  ) : spinner;
}
