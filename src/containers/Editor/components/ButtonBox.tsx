import { useRouter } from 'next/router';
import React from 'react';
import { CustomButton } from 'src/components';
import { customColor } from 'src/constants/index';
import { noBtn, twoBtn } from 'src/utils/modal';
import styled from 'styled-components';
import { InformationBoardData } from 'src/dummy/photoCardInfo';
import { DailyBoardData } from 'src/dummy/dailyInfo';
import { InformationBoardType } from 'src/types/board.type';
import { DailyBoardType } from 'src/types/board.type';

type ButtonBoxProps = {
  choose: string;
  postInfoData: InformationBoardType;
  postDailyData: DailyBoardType;
};
type AddInfoType = {
  (postData: InformationBoardType): void;
};
type AddDailyType = {
  (postData: DailyBoardType): void;
};
export const ButtonBox: React.FC<ButtonBoxProps> = ({
  choose,
  postInfoData,
  postDailyData,
}) => {
  const router = useRouter();
  const addInfo: AddInfoType = postInfoData => {
    InformationBoardData.push(postInfoData);
  };

  const addDaily: AddDailyType = postDailyData => {
    DailyBoardData.push(postDailyData);
  };

  const clickAdd = () => {
    choose === 'information' ? addInfo(postInfoData) : addDaily(postDailyData);
    noBtn('글을 등록하였습니다.', () =>
      setTimeout(() => {
        router.push('/information');
      }, 2000),
    );
  };
  const clickCancel = () => {
    twoBtn('글 쓰기를 취소하시겠습니까?', () =>
      setTimeout(() => {
        router.push('/information');
      }, 2000),
    );
  };

  return (
    <Wrapper>
      <CustomButton
        text="취소"
        width={120}
        backGroundColor={customColor.gray}
        color={customColor.black}
        onClick={clickCancel}
      />
      <CustomButton text="등록" width={120} onClick={clickAdd} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 16px 0;
  justify-content: flex-end;
`;
