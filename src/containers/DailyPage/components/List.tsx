import React, { useState } from 'react';
import styled from 'styled-components';
import ListContents from '../../../components/daily/ListContents';
import ListHeader from '../../../components/daily/ListHeader';
import { DailyBoard } from 'src/dummy/dailyInfo';
import { DailyBoardType } from 'src/types/board.type';
import { CustomPagination } from 'src/components/CustomPagination';

export function List() {
  const [activePage, setActivePage] = useState<number>(1);
  const DailyBoardPiece: DailyBoardType[] = [];
  const pieceNumber = 10;
  DailyBoard.map((data, index) => {
    if (
      index < (activePage - 1) * pieceNumber ||
      index > activePage * pieceNumber - 1
    ) {
      return;
    }
    DailyBoardPiece.push(data);
  });
  return (
    <Container>
      <ListHeader />
      <ListContents
        activePage={activePage}
        pieceNumber={pieceNumber}
        dailyData={DailyBoardPiece}
      />
      <CustomPagination
        activePage={activePage}
        itemsCountPerPage={pieceNumber}
        totalItemsCount={DailyBoard.length}
        onChange={e => setActivePage(e)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;
