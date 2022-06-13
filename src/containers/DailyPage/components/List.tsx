import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListContents from '../../../components/daily/ListContents';
import ListHeader from '../../../components/daily/ListHeader';
import { DailyBoardData } from 'src/dummy/dailyInfo';
import { DailyBoardType } from 'src/types/board.type';
import { CustomPagination } from 'src/components/CustomPagination';

export function List() {
  const [activePage, setActivePage] = useState<number>(1);

  const [dailyBoardPiece, setDailyBoardPiece] = useState<DailyBoardType[]>([]);
  const pieceNumber = 10;

  useEffect(() => {
    setDailyBoardPiece([]);

    [...DailyBoardData].reverse().map((data, index) => {
      if (
        index < (activePage - 1) * pieceNumber ||
        index > activePage * pieceNumber - 1
      ) {
        return;
      }

      setDailyBoardPiece(prev => prev.concat(data));
    });
  }, [activePage]);
  return (
    <Container>
      <ListHeader />
      <ListContents
        activePage={activePage}
        pieceNumber={pieceNumber}
        dailyData={dailyBoardPiece}
      />
      <CustomPagination
        activePage={activePage}
        itemsCountPerPage={pieceNumber}
        totalItemsCount={DailyBoardData.length}
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
