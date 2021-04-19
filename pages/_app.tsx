import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { AppWrapper } from '../components/AppWrapper';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { MessageBox } from '../components/MessageBox';

const GlobalStyle = createGlobalStyle`

  :root {
    --border-color: #dfe3e0;
    --default-background-color: var(--border-color);
    --danger-background-color: #f8e6e7;
    --danger-color: #ff0000;
    --font-color: #44505f;
    --gap: 8px;
    --gap-2: calc(var(--gap) * 2);
    --gap-3: calc(var(--gap) * 3);
    --info-background-color: #caedff;
    --inverted-font-color: #ffffff;
    --min-width: 600px;
    --active-color: #318eff;
  }

  html,
  body {
    color: var(--font-color);
    font-family: Helvetica, Arial, sans-serif;
    font-size: calc(10px + 2vmin);
    height: 1px;
    line-height: 1.3;
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  a {
    color: var(--font-color);
    text-decoration: none;

    &:hover {
      color: var(--active-color);
    }
  }

  #__next {
    height: 1px;
    min-height: 100%;
  }
`;

export default function Application({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      setError(null);
      setIsLoading(true);
    };
    const handleRouteComplete = () => {
      setIsLoading(false);
    };
    const handleRouteError = err => {
      setError(err.message);
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteError);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Event Management 2.0</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppWrapper>
        <GlobalStyle />
        {error ? <MessageBox type="error" messages={[error]} /> : null}
        <Component {...pageProps} />
        {isLoading ? <LoadingIndicator withOverlay /> : null}
      </AppWrapper>
    </>
  );
}
