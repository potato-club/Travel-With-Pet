import { useRouter } from 'next/router';
import React from 'react';
import { CustomButton } from 'src/components';
import { customColor } from 'src/constants/index';
import { noBtn, twoBtn } from 'src/utils/modal';
import styled from 'styled-components';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { DailyBoard } from 'src/dummy/dailyInfo';
import { InformationBoardType } from 'src/types/board.type';
import { DailyBoardType } from 'src/types/board.type';

type ButtonBoxProps = {
  choose: string;
  postInfoData: InformationBoardType;
  postDailyData: DailyBoardType;
  setPhotoCardInfoUniquePlus: Function;
  setDailyInfoUniquePlus: Function;
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
  setPhotoCardInfoUniquePlus,
  setDailyInfoUniquePlus,
}) => {
  const router = useRouter();

  const test = () => {
    console.log(postInfoData.contents);
  };
  const addInfo: AddInfoType = postInfoData => {
    // 여기서 contents를 바꿀까
    // object로 통일하고 부분만 변경하는 식으로 할까
    setPhotoCardInfoUniquePlus((cur: number) => (cur += 1));
    InformationBoard.push(postInfoData);
    console.log(postInfoData.contents);
  };

  const addDaily: AddDailyType = postDailyData => {
    setDailyInfoUniquePlus((cur: number) => (cur += 1));
    DailyBoard.push(postDailyData);
    console.log(postDailyData.contents);
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
      <button onClick={test}>클릭 숫자증가</button>
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
