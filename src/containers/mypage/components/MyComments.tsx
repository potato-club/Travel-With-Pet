import styled from 'styled-components';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { TabsCategory } from './TabsCategory';
import { useState } from 'react';
import { CustomPagination } from 'src/components/CustomPagination';
import { comments, CommentsType } from 'src/dummy/comments';
import React from 'react';

export const MyComments = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const commentsPiece: CommentsType[] = [];
  const pieceNumber = 5;
  comments.map((data, index) => {
    if (
      index < (activePage - 1) * pieceNumber ||
      index > activePage * pieceNumber - 1
    ) {
      return;
    }
    commentsPiece.push(data);
  });

  return (
    <>
      <TabsCategory text="내가 작성한 댓글" />
      <HrSmall />
      {commentsPiece.map((item, i) => (
        <Item key={item.id} onClick={() => {}}>
          <PreviewContainer key={i}>
            <PreviewWrapper>
              <PreviewText>
                <TypoGraphy type="body1" fontWeight="bold">
                  {item.content}
                </TypoGraphy>
                <TypoGraphy type="body3" color="gray">
                  {item.writer}
                </TypoGraphy>
              </PreviewText>
              <TypoGraphy type="body1">{item.date}</TypoGraphy>
            </PreviewWrapper>
          </PreviewContainer>
        </Item>
      ))}
      <CustomPagination
        activePage={activePage}
        itemsCountPerPage={pieceNumber}
        totalItemsCount={comments.length}
        onChange={e => setActivePage(e)}
      />
    </>
  );
};

const Item = styled.div``;

const HrSmall = styled.div`
  width: 960px;
  border-bottom: 1px solid black;
`;
const PreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 960px;
  padding-left: 72px;
  margin-bottom: 15px;
  margin-top: 15px;
  flex-wrap: wrap;
  padding-right: 50px;
  gap: 16px;
`;

const PreviewText = styled.div`
  display: flex;
  flex: flex-around;
  flex-direction: column;
  gap: 16px;
`;

const PreviewContainer = styled.div`
  border-bottom: 1px solid black;
`;
