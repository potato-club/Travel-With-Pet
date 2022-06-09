import { Introduce, MyComments, MyPosts } from 'src/containers/mypage';
import styled from 'styled-components';

export const MyPage = () => {
  return (
    <Container>
      <Introduce />
      <MyPosts />
      <MyComments />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;
