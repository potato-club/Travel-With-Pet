import React, { useState } from 'react';
import { PhotoCardList } from 'src/components';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { TabsCategory } from './TabsCategory';
import { CustomPagination } from 'src/components/CustomPagination';
import { InformationBoardType } from 'src/types/board.type';
import { List } from 'src/containers/DailyPage/components/List';

export const MyPosts = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [tab, setTab] = useState('정보');
  const photoCardInfoPiece: InformationBoardType[] = [];
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
        <>
          <List />
        </>
      )}
    </>
  );
};
