import React, { useEffect, useState } from 'react';
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
  const [slicedText, setSlicedText] = useState('');
  const writer = owner.name;

  // ! contents 에서 사진URL이랑 내용을 분리해와야함.

  const imageUrl = () => {
    const firstThumbnail = contents.indexOf('![imageURL]');
    if (firstThumbnail === -1) return '/DefaultThumbnail.png';

    const thumbnailType = contents.indexOf(')', firstThumbnail);
    const thumbnail = contents.slice(firstThumbnail + 12, thumbnailType);

    return thumbnail;
  };

  useEffect(() => {
    let tempSlicer = '';
    for (let i = 0; i < contents.length; ++i) {
      if (contents[i] === '!') {
        const imageData = contents.indexOf('![imageURL]', i);
        if (imageData - i === 0) {
          i = contents.indexOf(')', imageData);
        } else {
          if (tempSlicer.length < 50) tempSlicer += contents[i];
        }
      } else if (tempSlicer.length < 50) tempSlicer += contents[i];
    }
    setSlicedText(tempSlicer);
  }, [contents]);
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
            Text={slicedText}
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
