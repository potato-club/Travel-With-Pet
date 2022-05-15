import React from 'react';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { MdOutlinePets, MdWaterDrop } from 'react-icons/md';
export function InfoBox() {
  return (
    <Container>
      <TitleWrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          가벼운 나들이
        </TypoGraphy>
        <MdOutlinePets size={100} />
      </TitleWrapper>
      <InfoContainer>
        <InfoWrapper>
          <IconWrapper>
            <MdWaterDrop size={24} />
          </IconWrapper>
          <TypoGraphy type="h3">물과 물그릇</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            목 말라요
          </TypoGraphy>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper>
            <MdWaterDrop size={24} />
          </IconWrapper>
          <TypoGraphy type="h3">물과 물그릇</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            목 말라요
          </TypoGraphy>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper>
            <MdWaterDrop size={24} />
          </IconWrapper>
          <TypoGraphy type="h3">물과 물그릇</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            목 말라요
          </TypoGraphy>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper>
            <MdWaterDrop size={24} />
          </IconWrapper>
          <TypoGraphy type="h3">물과 물그릇</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            목 말라요
          </TypoGraphy>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper>
            <MdWaterDrop size={24} />
          </IconWrapper>
          <TypoGraphy type="h3">물과 물그릇</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            목 말라요
          </TypoGraphy>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper>
            <MdWaterDrop size={24} />
          </IconWrapper>
          <TypoGraphy type="h3">물과 물그릇</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            목 말라요
          </TypoGraphy>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper>
            <MdWaterDrop size={24} />
          </IconWrapper>
          <TypoGraphy type="h3">물과 물그릇</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            목 말라요
          </TypoGraphy>
        </InfoWrapper>
        <InfoWrapper>
          <IconWrapper>
            <MdWaterDrop size={24} />
          </IconWrapper>
          <TypoGraphy type="h3">물과 물그릇</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            목 말라요
          </TypoGraphy>
        </InfoWrapper>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  border: 1px solid ${customColor.gray};
  border-radius: 10px;
  padding: 20px;
`;

const TitleWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px 0;
`;
const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 32px 0;
  padding: 40px 0;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 24px;
`;


const IconWrapper = styled.div``;