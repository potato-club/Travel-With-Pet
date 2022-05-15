import React from 'react'
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import styled from "styled-components";
import { InfoBox } from './components/InfoBox';
import { travelTip, walkTip } from './components/tipData';

export function TipPage() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <TypoGraphy type="Head" fontWeight="bold">
            기본상식 TIP !
          </TypoGraphy>
        </Title>
        <Line />
        <Contents>
          <TextWrapper>
            <TypoGraphy type="h1">
              반려동물이 냄새맡는 것은 사람들이 핸드폰으로 정보를 찾아내는 것과
              같답니다. 충분히 냄새를 맡게 해주세요!
            </TypoGraphy>
          </TextWrapper>
          <TextWrapper>
            <TypoGraphy type="h1">
              낯선 곳에 가는 일은 반려동물에게 무섭게 느껴질 수 있어요. 친숙한
              물건을 함께 챙겨주세요!
            </TypoGraphy>
          </TextWrapper>
          <TextWrapper>
            <TypoGraphy type="h1" fontWeight="bold">
              반려동물과 외출 시 챙겨야할
              <span style={{ color: `${customColor.brownDark}` }}> 준비물</span>
              을 알아볼까요?
            </TypoGraphy>
          </TextWrapper>
          <InFoBoxContainer>
            <InfoBox {...walkTip} />
            <InfoBox {...travelTip} />
          </InFoBoxContainer>
        </Contents>
      </Wrapper>
    </Container>
  );
}

type InformationType = {
  infoIcon?: any;
  infoTitle: string;
  infoSub: string;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1178px;
  border-left: 1px solid ${customColor.gray};
  border-right: 1px solid ${customColor.gray};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

const Line = styled.div`
  border-bottom: 1px solid ${customColor.gray};
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px 0;
  margin: 40px 120px 240px 120px;
`;


const TextWrapper = styled.div`
  div {
    text-align: center;
    max-width: 600px;
  }
`;

const InFoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 80px 0;
`;