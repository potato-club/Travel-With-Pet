import { NextPage } from 'next';
import React, { useEffect, useMemo } from 'react';
import { Category } from './components';
import { FixedButton, Notice, PhotoCardList, Search } from 'src/components';
import styled from 'styled-components';
import { InformationBoard } from 'src/dummy/photoCardInfo';
// import { photoCardInfo, totalItemsCount } from 'src/dummy/photoCardInfo';
import { InformationBoardType } from 'src/types/board.type';
export const InformationPage: NextPage = () => {
  const travelData: InformationBoardType[] = [];
  const shopData: InformationBoardType[] = [];
  const hotelData: InformationBoardType[] = [];
  const otherData: InformationBoardType[] = [];

  const sliceData = (dataArray: InformationBoardType[], category: string) => {
    for (let i = 0; dataArray.length < 4 && i < InformationBoard.length; ++i) {
      InformationBoard[i].category === category && dataArray.push(InformationBoard[i]);
    }
  };

  sliceData(travelData, '여행');
  sliceData(shopData, '음식점');
  sliceData(hotelData, '숙소');
  sliceData(otherData, '기타');

  return (
    <Container>
      <Search />
      <Notice />
      <FixedButton />
      <Category category="여행" pathName="/travel">
        <PhotoCardList type="MainPage" photoCardInfo={travelData} />
      </Category>
      <Category category="음식점" pathName="/shop">
        <PhotoCardList type="MainPage" photoCardInfo={shopData} />
      </Category>
      <Category category="숙소" pathName="/hotel">
        <PhotoCardList type="MainPage" photoCardInfo={hotelData} />
      </Category>
      <Category category="기타" pathName="/other">
        <PhotoCardList type="MainPage" photoCardInfo={otherData} />
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
