import { TypoGraphy } from 'src/components';
import { Tag } from 'src/components/photoCardList/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

type Props = {
  detailData: {
    ImageUrl: string;
    Title: string;
    Like: number;
    Text: string;
    Writer: string;
    Date: string;
    Tags: string[];
    View: number;
  };
};
export const DailyDetailHeader = ({ detailData }: Props) => {
  return (
    <Container>
      <TitleWrapper>
        <TypoGraphy type="Title" color={customColor.black} fontWeight="bold">
          {detailData.Title}
        </TypoGraphy>
      </TitleWrapper>
      <TagWrapper>
        <Tag Tags={detailData.Tags} />
      </TagWrapper>
      <InfoWrapper>
        <Info>
          <TypoGraphy type="body2" color={customColor.gray} fontHeight="20px">
            {detailData.Writer}
          </TypoGraphy>
        </Info>
        <Info>
          <TypoGraphy type="body2" color={customColor.gray} fontHeight="20px">
            {detailData.Date}
          </TypoGraphy>
        </Info>
        {/* <Info>
          <IconWrapper color={customColor.red}>
            <AiFillHeart />
          </IconWrapper>
          <TypoGraphy type="body2" color={customColor.gray} fontHeight="20px">
            {detailData.Like}
          </TypoGraphy>
        </Info>

        <Info>
          <IconWrapper color={customColor.blackLight}>
            <BsPerson />
          </IconWrapper>
          <TypoGraphy type="body2" color={customColor.gray} fontHeight="20px">
            {detailData.View}
          </TypoGraphy>
        </Info> */}
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 320px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;
const TitleWrapper = styled.div``;
const TagWrapper = styled.div``;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  height: 100%;

  border-left: 1px solid ${customColor.gray};
  :first-child {
    border-left: 0px;
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  color: ${({ color }) => color};
  font-size: 20px;
`;
