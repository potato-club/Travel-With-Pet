import React from 'react';
import styled from 'styled-components';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { InformationBoardType } from 'src/types/board.type';
type Props = {
  data: InformationBoardType;
};

export const MyCommentsCell = ({ data }: Props) => {
  return (
    <>
      <HrSmall />
      <PreviewPic />
      <PreviewText>
        <TypoGraphy>{}</TypoGraphy>
      </PreviewText>
    </>
  );
};

const Item = styled.div``;

const HrSmall = styled.hr`
  width: 960px;
`;
const PreviewWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: 72px;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 16px;
`;

const PreviewPic = styled.div`
  width: 40px;
  height: 40px;
  color: black;
  background-color: black;
`;

const PreviewText = styled.div`
  display: flex;
  flex: flex-around;
  flex-direction: column;
  gap: 16px;
`;

const PreviewContainer = styled.div``;
