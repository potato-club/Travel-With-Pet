import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './components';
import { InformationBoardType } from 'src/types/board.type';

type Props = {
  type: 'MainPage' | 'MyPage';
  photoCardInfo: InformationBoardType[];
};

export function PhotoCardList({ type, photoCardInfo }: Props) {
  return (
    <Wrapper type={type}>
      {photoCardInfo.map(data => (
        <PhotoCard key={data._id} data={data} />
      ))}
    </Wrapper>
  );
}

type StyledListProps = {
  type: 'MainPage' | 'MyPage';
};
const Wrapper = styled.div<StyledListProps>`
  width: 100%;
  max-width: ${({ type }) => (type === 'MainPage' ? '1178px' : '870px')};
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  flex-wrap: wrap;
  gap: 80px 0px;
`;
