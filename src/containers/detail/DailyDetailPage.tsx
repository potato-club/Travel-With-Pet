import * as S from './DetailPage';
import { DetailBody, CommentList, DailyDetailHeader } from './components';
// import { dailyInfo } from 'src/dummy/daily';
// import { comments } from 'src/dummy/comments';
// import { useState } from 'react';
// import { OwnerType } from 'src/types/user.type';
import { DailyBoardType } from 'src/types/board.type';

type Props = {
  detailInfo: DailyBoardType;
};

export const DailyDetailPage = ({ detailInfo }: Props) => {
  return (
    <S.Container>
      <DailyDetailHeader detailInfo={detailInfo} />
      <DetailBody
        detailInfo={detailInfo}
        // likeSelected={likeSelected}
        // setLikeSelected={setLikeSelected}
      />
      <CommentList commentLength={detailInfo.commentCount} />
    </S.Container>
  );
};
