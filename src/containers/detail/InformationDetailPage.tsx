import * as S from './DetailPage';
import { CommentList, DetailBody, InformationDetailHeader } from './components';
// import { useState } from 'react';
// import { OwnerType } from 'src/types/user.type';
import { InformationBoardType } from 'src/types/board.type';

type Props = {
  detailInfo?: InformationBoardType;
};

export const InformationDetailPage = ({ detailInfo }: Props) => {
  return (
    <S.Container>
      <InformationDetailHeader detailInfo={detailInfo} />
      <DetailBody detailInfo={detailInfo} />

      <CommentList commentLength={detailInfo?.commentCount} />
    </S.Container>
  );
};
