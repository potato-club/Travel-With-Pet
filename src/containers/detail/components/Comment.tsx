import { CustomButton, TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { AiOutlineAlert } from 'react-icons/ai';
import { CommentsType } from 'src/dummy/comments';
import { BiDotsVerticalRounded } from 'react-icons/bi';
type Props = {
  data: CommentsType[];
};
export const Comment = ({ data }: Props) => {
  return (
    <Container>
      <HeaderWrapper>
        <TitleWrapper>
          <TypoGraphy type="body1" fontWeight="bold">
            댓글
          </TypoGraphy>
        </TitleWrapper>
        <ReportWrapper>
          <IconWrapper>
            <AiOutlineAlert />
          </IconWrapper>
          <TypoGraphy type="body1" color={customColor.gray}>
            신고하기
          </TypoGraphy>
        </ReportWrapper>
      </HeaderWrapper>
      <Line />

      <BodyWrapper>
        {data.map(data => (
          <CommentWrapper key={data.id}>
            <WriterWrapper>
              <TypoGraphy type="body2" fontWeight="bold">
                {data.writer}
              </TypoGraphy>
            </WriterWrapper>
            <ContentWrapper>
              <TypoGraphy type="body2">{data.content}</TypoGraphy>
            </ContentWrapper>
            <DateWrapper>
              <div>
                <TypoGraphy type="body2">{data.date}</TypoGraphy>
              </div>
              <div>
                <TypoGraphy type="body2">{data.time}</TypoGraphy>
              </div>
            </DateWrapper>
            <ModalWrapper>
              <ModalIconWrapper>
                <BiDotsVerticalRounded />
              </ModalIconWrapper>
            </ModalWrapper>
          </CommentWrapper>
        ))}
      </BodyWrapper>
      <ButtomWrapper>
        <Input />
        <ButtonWrapper>
          <CustomButton text="댓글작성" width={130} />
        </ButtonWrapper>
      </ButtomWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`;

// -------------------Header---------------------------

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  width: 100%;
  max-width: 1178px;
  margin: auto;
`;
const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${customColor.gray};
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const ReportWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  :hover {
    cursor: pointer;
    div {
      font-weight: bold;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${customColor.gray};
  font-size: 20px;
  margin-right: 5px;
`;

// -------------------Body---------------------------

const BodyWrapper = styled.div`
  width: 100%;
  max-width: 1178px;
`;
const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;

const WriterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 8%;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2%;
`;
const ModalIconWrapper = styled.div`
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;

// -------------------Bottom---------------------------
const ButtomWrapper = styled.div`
  width: 100%;
  max-width: 1178px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Input = styled.input`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border: 2px solid ${customColor.gray};
  border-radius: 10px;
  padding: 5px;
  :focus {
    outline: none;
    border-color: ${customColor.brownDark};
  }
`;
const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
