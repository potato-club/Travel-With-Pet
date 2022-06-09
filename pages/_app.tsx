import type { AppProps } from 'next/app';
import 'styles/global.css';
import { LayoutContainer } from 'src/components';
import { Header } from 'src/components/header/Header';
import { Footer } from 'src/components/footer/Footer';
import { LoadingContext } from 'src/context/LoadingContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingContext>
      <LayoutContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LayoutContainer>
    </LoadingContext>
  );
}

export default MyApp;
