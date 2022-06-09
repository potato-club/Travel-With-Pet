import * as S from './DetailPage';
import { DetailBody, InformationDetailHeader, CommentList } from './components';
import { comments } from 'src/dummy/comments';
// import { useState } from 'react';
// import { OwnerType } from 'src/types/user.type';
import { InformationBoardType } from 'src/types/board.type';
type Props = {
  detailInfo: InformationBoardType;
};

export const InformationDetailPage = ({ detailInfo }: Props) => {
  // const [likeSelected, setLikeSelected] = useState(false);

  return (
    <S.Container>
      <InformationDetailHeader
        headerInfo={{
          title: detailInfo.title,
          category: detailInfo.category,
          city: detailInfo.city,
          detailCity: detailInfo.detailCity,
          tags: detailInfo.tags,
          owner: detailInfo.owner.name,
          createdAt: detailInfo.createdAt,
        }}
      />
      <DetailBody
        // likeSelected={likeSelected}
        // setLikeSelected={setLikeSelected}
        contents={detailInfo['contents']}
      />
      <CommentList commentListProps={comments} />
    </S.Container>
  );
};
