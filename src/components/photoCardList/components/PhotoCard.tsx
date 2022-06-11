import React from 'react';
import { Info, Tag } from './index';
import styled from 'styled-components';
// import { InformationBoardType } from 'src/constants/photoCard.type';
import Image from 'next/image';
import Link from 'next/link';
import { InformationBoardType } from 'src/types/board.type';
type Props = {
  data: InformationBoardType;
};

export const PhotoCard = ({ data }: Props) => {
  // const { id, ImageUrl, Area, Like, Text, Writer, Date, Tags }: PhotoCardInfoType = data;
  const { _id, city, tags, owner, createdAt, contents }: InformationBoardType =
    data;

  const writer = owner.name;

  // ! contents 에서 사진URL이랑 내용을 분리해와야함.

  const imageUrl = () => {
    const thumbnailStart = contents.indexOf('![imageURL]');

    if (thumbnailStart === -1) return '/DefaultThumbnail.png';

    const thumbnailType = contents.indexOf(')', thumbnailStart);
    const thumbnail = contents.slice(thumbnailStart + 12, thumbnailType);
    return thumbnail;
  };

  const text =
    '사진url, 내용은 정적으로 넣은거. 나중에 분리해야함 지금은 테스트중입니다 가나다라마바사';

  return (
    <Container>
      <Link href={`/information/detail/${_id}`}>
        <a style={{ textDecoration: 'none' }}>
          <Image width={260} height={180} src={imageUrl()} alt="thumbnail" />
          <Info
            Area={city}
            // Like={Like}
            Text={text}
            Writer={writer}
            Date={createdAt}
          />
        </a>
      </Link>
      <Tag Tags={tags} />
    </Container>
  );
};

const Container = styled.div`
  width: 260px;
`;
