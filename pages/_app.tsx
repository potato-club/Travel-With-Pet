import type { AppProps } from 'next/app';
import 'styles/global.css';
import { LayoutContainer } from 'src/components';
import { Header } from 'src/components/header/Header';
import { Footer } from 'src/components/footer/Footer';
import { MyPage } from 'src/containers/mypage/MyPage';
import { LoadingContext } from 'src/context/LoadingContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingContext>
      <LayoutContainer>
        <Header />
        <Component {...pageProps} />
      </LayoutContainer>
    </LoadingContext>
  );
}

export default MyApp;
