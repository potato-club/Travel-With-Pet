import * as S from './DetailPage';
import { DetailBody, InformationDetailHeader, CommentList } from './components';
import { comments } from 'src/dummy/comments';
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
      <DetailBody
        // likeSelected={likeSelected}
        // setLikeSelected={setLikeSelected}
        detailInfo={detailInfo}
      />
      <CommentList commentListProps={comments} />
    </S.Container>
  );
};
