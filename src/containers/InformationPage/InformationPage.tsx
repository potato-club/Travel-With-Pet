import { NextPage } from 'next';
import React from 'react';
import { Category } from './components';
import { FixedButton, Notice, PhotoCardList, Search } from 'src/components';
import styled from 'styled-components';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { InformationBoardType } from 'src/types/board.type';
// import { photoCardInfo, totalItemsCount } from 'src/dummy/photoCardInfo';
export const InformationPage: NextPage = () => {

  // 이 코드는 더미데이터를 4개씩 출력하기 위해 있는 것이므로, API 연동하면 이렇게 할 필요 X
  const photoCardInfo4Pieces: InformationBoardType[] = [];
  InformationBoard.map((data, index) => {
    if (index >= 4) return;
    photoCardInfo4Pieces.push(data);
  });

  
  return (
    <Container>
      <Search />
      <Notice />
      <FixedButton />
      <Category category="여행" pathName="/travel">
        <PhotoCardList type="MainPage" photoCardInfo={InformationBoard} />
      </Category>
      <Category category="음식점" pathName="/shop">
        <PhotoCardList type="MainPage" photoCardInfo={InformationBoard} />
      </Category>
      <Category category="숙소" pathName="/hotel">
        <PhotoCardList type="MainPage" photoCardInfo={InformationBoard} />
      </Category>
      <Category category="기타" pathName="/other">
        <PhotoCardList type="MainPage" photoCardInfo={InformationBoard} />
      </Category>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
`;