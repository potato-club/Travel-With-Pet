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
    const firstThumbnail = contents.indexOf('![imageURL]');
    if (firstThumbnail === -1) return '/DefaultThumbnail.png';

    const thumbnailType = contents.indexOf(')', firstThumbnail);
    const thumbnail = contents.slice(firstThumbnail + 12, thumbnailType);

    return thumbnail;
  };

  const getContents = () => {
    const firstThumbnail = contents.indexOf('![imageURL]');
    if (firstThumbnail === -1) return contents;
    const imageCount = contents.match(/!\[imageURL\]/g)?.length; // 있으면 number, 없으면 undefined
    let filterContents = contents;

    if (typeof imageCount === 'number') {
      for (let i = 0; i < imageCount; ++i) {
        const imageStart = filterContents.indexOf('![imageURL]');
        const imageEnd = filterContents.indexOf(')', imageStart);
        filterContents = filterContents.replace(
          filterContents.substring(imageStart, imageEnd + 1),
          '',
        );
      }
    }
    return filterContents;
  };

  return (
    <Container>
      <Link href={`/information/detail/${_id}`}>
        <a style={{ textDecoration: 'none' }}>
          <Image
            width={260}
            height={180}
            src={imageUrl()}
            alt="thumbnail"
            unoptimized
          />
          <Info
            Area={city}
            // Like={Like}
            Text={getContents()}
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
