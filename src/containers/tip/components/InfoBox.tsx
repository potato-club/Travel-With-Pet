import React from 'react';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { TipDataType } from './tipData';

export function InfoBox(props:TipDataType) {
  return (
    <Container>
      <TitleWrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          {props.title}
        </TypoGraphy>
        <IconWrapper style={{fontSize:'100px'}}>{props.titleIcon && React.createElement(props.titleIcon)}</IconWrapper>
      </TitleWrapper>
      <InfoContainer>
        {props.information.map((data, index) => (
          <InfoWrapper key={index}>
            <IconWrapper>
              {data.infoIcon && React.createElement(data.infoIcon)}
            </IconWrapper>
            <TypoGraphy type="h3">{data.infoTitle}</TypoGraphy>
            <TypoGraphy type="body1" color={customColor.gray}>
              {data.infoSub}
            </TypoGraphy>
          </InfoWrapper>
        ))}
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


const IconWrapper = styled.div`
  font-size: 24px;
`;