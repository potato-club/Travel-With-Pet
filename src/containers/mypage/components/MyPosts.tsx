import React, { useState } from 'react';
import { PhotoCardList } from 'src/components';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { TabsCategory } from './TabsCategory';
import { CustomPagination } from 'src/components/CustomPagination';
import { InformationBoardType } from 'src/types/board.type';

export const MyPosts = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [tab, setTab] = useState('정보');
  // categoryData를 일단 다른 걸로 바꿔본다!
  const photoCardInfoPiece: InformationBoardType[] = [];
  // 빈 객체를 생성해서 map 을 하니까 아무것도 안 나오지 ㅠ
  // totalItemsCount 도 postData.length 로 주니까 아무것도 안 나오는 거야
  // 더미 데이터인 InformationBoard 의 전체 길이를 준다!
  const postData: InformationBoardType[] = [];
  const pieceNumber = 6;
  InformationBoard.map((data, index) => {
    if (
      index < (activePage - 1) * pieceNumber ||
      index > activePage * pieceNumber - 1
    ) {
      return;
    }
    photoCardInfoPiece.push(data);
  });

  return (
    <>
      <TabsCategory text={'내가 작성한 글'} tab={tab} setTab={setTab} />
      {tab === '정보' ? (
        <>
          <PhotoCardList type="MyPage" photoCardInfo={photoCardInfoPiece} />
          <CustomPagination
            activePage={activePage}
            itemsCountPerPage={pieceNumber}
            totalItemsCount={InformationBoard.length}
            onChange={e => setActivePage(e)}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
