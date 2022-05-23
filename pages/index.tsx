import type { NextPage } from 'next';
import { IntroMainPage } from 'src/containers/index';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <div>
      <Link
        href={
          'http://ec2-3-37-80-15.ap-northeast-2.compute.amazonaws.com:4000/google'
        }
      >
        <a>구글 로그인하기</a>
      </Link>
    </div>
  );
};

export default Home;
