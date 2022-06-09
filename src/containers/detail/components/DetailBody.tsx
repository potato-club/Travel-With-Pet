// import { customColor } from 'src/constants';
import { DailyBoardType } from 'src/types/board.type';
import styled from 'styled-components';
// import { AiTwotoneHeart } from 'react-icons/ai';
// import { TypoGraphy } from 'src/components';
// import { Dispatch, SetStateAction } from 'react';

type Props = {
  // contents?: string;
  detailInfo?: DailyBoardType;
  // likeSelected: boolean;
  // setLikeSelected: Dispatch<SetStateAction<boolean>>;
};
export const DetailBody = ({ detailInfo }: Props) => {
  // const handleLikeButton = () => {
  //   setLikeSelected(data => !data);
  // };
  return (
    <Container>
      <ContentWrapper>{detailInfo && detailInfo.contents}</ContentWrapper>
      {/* <LikeButtonWrapper>
        <LikeButton onClick={handleLikeButton}>
          <IconWrapper likeSelected={likeSelected}>
            <AiTwotoneHeart />
          </IconWrapper>
          <TypoGraphy type="body3" color={customColor.gray}>
            추천하기
          </TypoGraphy>
        </LikeButton>
      </LikeButtonWrapper> */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1178px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const LikeButtonWrapper = styled.div`
//   margin-top: 100px;
// `;

// const LikeButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   border: 2px solid ${customColor.gray};
//   border-radius: 9999px;
//   width: 100px;
//   height: 100px;
//   background-color: ${customColor.white};

//   :hover {
//     cursor: pointer;
//     background-color: ${customColor.grayLight};
//   }
// `;

// const IconWrapper = styled.div<{ likeSelected: boolean }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 50px;
//   margin-bottom: 5px;
//   color: ${({ likeSelected }) =>
//     likeSelected ? customColor.red : customColor.gray};
//   transition: 0.2s ease-in;
//   transform: ${({ likeSelected }) =>
//     likeSelected ? 'scale(1.1)' : 'scale(1)'};
// `;
