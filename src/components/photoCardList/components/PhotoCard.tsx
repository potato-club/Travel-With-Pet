import React from 'react';
import { Info, Tag } from './index';
import styled from "styled-components";
// import { InformationBoardType } from 'src/constants/photoCard.type';
import Image from 'next/image';
import Link from 'next/link';
import { InformationBoardType } from "src/types/board.type";
type Props = {
  data: InformationBoardType;
};

    // _id: '1', // 유니크
    // title: '타이틀',
    // category: '음식점',
    // city: '인천',
    // detailCity: '구월동',
    // tags: '#태그#나중에#분리하기',
    // contents: '여기에 내용, 사진 같이 들어감',
    // heart: 1,
    // commentCount: 1,
    // comments: [],
    // owner: {
    //   _id: '123124',
    //   email: 'email.gmail.com',
    //   avatarUrl: '..',
    //   name: '게시글작성자',
    //   __v: 1, // 유니크?
    // },
    // createdAt: new Date(),
    // __v: 1, // 유니크?
export const PhotoCard = ({ data }: Props) => {
  // const { id, ImageUrl, Area, Like, Text, Writer, Date, Tags }: PhotoCardInfoType = data;
  const { _id, city, tags, owner, createdAt }: InformationBoardType =
    data;

  const writer = owner.name;

    // ! contents 에서 사진URL이랑 내용을 분리해와야함.
    const imageUrl = '/DummyThumbnail.png';
    const text = '사진url, 내용은 정적으로 넣은거. 나중에 분리해야함';
  return (
    <Container>
      <Link href={`/information/detail/${_id}`}>
        <a style={{ textDecoration: 'none' }}>
          <Image width={260} height={180} src={imageUrl} alt="thumbnail" />
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