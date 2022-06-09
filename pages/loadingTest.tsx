import { NextPage } from 'next';
import React, { useEffect, useMemo } from 'react';
import { Category } from 'src/containers/InformationPage/components';
import { FixedButton, Notice, PhotoCardList, Search } from 'src/components';
import styled from 'styled-components';
import { InformationBoard } from 'src/dummy/photoCardInfo';
// import { photoCardInfo, totalItemsCount } from 'src/dummy/photoCardInfo';
import { InformationBoardType } from 'src/types/board.type';
import { useLoading } from 'hooks/useLoading.hook';
const LoadingTest: NextPage = () => {
  const travelData: InformationBoardType[] = [];
  const shopData: InformationBoardType[] = [];
  const hotelData: InformationBoardType[] = [];
  const otherData: InformationBoardType[] = [];

  const { onLoading, offLoading } = useLoading();

  const sliceData = (dataArray: InformationBoardType[], category: string) => {
    for (let i = 0; dataArray.length < 4; ++i) {
      InformationBoard[i].category === category &&
        dataArray.push(InformationBoard[i]);
    }
  };

  sliceData(travelData, '여행');
  sliceData(shopData, '음식점');
  sliceData(hotelData, '숙소');
  sliceData(otherData, '기타');

  const loadingTest = async () => {
    onLoading();
    setTimeout(() => {
      offLoading();
    }, 2000);
  };

  return (
    <Container>
      <LoadingText onMouseEnter={() => loadingTest()}>
        로딩 테스트 (마우스올리기)
      </LoadingText>
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

const LoadingText = styled.div``;

export default LoadingTest;