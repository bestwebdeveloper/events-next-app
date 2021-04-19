import * as Styled from './styles';

interface MessageProps {
  messages?: string[];
  type?: 'default' | 'error' | 'info';
}

export const MessageBox = ({ messages = [], type = 'default' }: MessageProps): JSX.Element =>
  messages.length > 0 ? (
    <Styled.MessageBoxWrapper type={type}>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </Styled.MessageBoxWrapper>
  ) : null;
