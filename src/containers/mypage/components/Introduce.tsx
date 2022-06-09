import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { BsPersonCircle } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { customColor } from 'src/constants';
import { useState, useRef } from 'react';
import Image from 'next/image';

export const Introduce = () => {
  const [isExit, setExit] = useState(false);
  const [img, setImg] = useState('');
  // const formdata = new FormData();
  const inputRef = useRef(null); // 컴포넌트 재렌더링.. 그 이전에 있던 걸 기억한다
  console.log(img);
  return (
    <>
      <Div>
        <MyPageText>
          <TypoGraphy type={'Head'} fontWeight={'bold'} textAlign={'center'}>
            마이페이지
          </TypoGraphy>
        </MyPageText>
        <Hr />
        <SignUpDate>
          <TypoGraphy>가입일자 : 2022. 03. 25 </TypoGraphy>
          <BtnDots>
            <BiDotsVerticalRounded
              size="16px"
              onClick={() => {
                setExit(!isExit);
              }}
            />
            {isExit ? (
              <BtnExitWrapper>
                <BtnExit>
                  <TypoGraphy type="body1" fontWeight="bold">
                    회원탈퇴
                  </TypoGraphy>
                </BtnExit>
              </BtnExitWrapper>
            ) : (
              ''
            )}
          </BtnDots>
        </SignUpDate>
        <WrapperInfo>
          <label htmlFor="name">
            <BsPersonCircle size="200px" color="skyblue" />
            {/* {img !== '' && (
              <Image src={state.previewURL} width="100px" height="100px" />
            )} */}
          </label>
          <input
            type="file"
            id="name"
            name="name"
            // ref={inputRef}
            onChange={e => {
              console.log('e', e.target);
              setImg(e.target.value);
            }}
          />
          <NickName>
            <TypoGraphy type="h1" fontWeight="bold">
              양파먹는 소녀
              {/* {Number(isExit)} */}
            </TypoGraphy>
          </NickName>
          <TextEmail>
            <TypoGraphy type="h3" color={customColor.gray}>
              19adsfasdf@gmail.com
            </TypoGraphy>
          </TextEmail>
          <WrapperCounter>
            <Counter>
              <TypoGraphy fontWeight="bold">내가 작성한 글 수</TypoGraphy>
              <TypoGraphy fontWeight="bold">내가 작성한 댓글 수</TypoGraphy>
            </Counter>
            <Counter>
              <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                12
              </TypoGraphy>
              <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                12
              </TypoGraphy>
            </Counter>
          </WrapperCounter>
          <BtnLogout>
            <TypoGraphy type="body1" fontWeight="bold">
              로그아웃
            </TypoGraphy>
          </BtnLogout>
        </WrapperInfo>
      </Div>
    </>
  );
};

const MyPageText = styled.div`
  position: relative;
  display: flex;
  padding: 80px;
  justify-content: center;
`;

const Hr = styled.hr`
  width: 1178px;
  margin-bottom: 8px;
`;

const SignUpDate = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

const BtnDots = styled.button`
  position: relative;
  border: 0px;
  background-color: ${customColor.white};
  cursor: pointer;
`;

const BtnExitWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

const BtnExit = styled.button`
  display: flex;
  justify-content: center;
  width: 144px;
  height: 40px;
  background-color: ${customColor.white};
  border-color: ${customColor.brownDark};
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
`;

const WrapperInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NickName = styled.div`
  margin-top: 24px;
`;

const TextEmail = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const WrapperCounter = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: column;
  gap: 40px;
`;

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BtnLogout = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  width: 144px;
  height: 40px;
  background-color: ${customColor.white};
  border-color: ${customColor.brownDark};
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
`;

const Div = styled.div`
  position: relative;
  width: 1180px;
  max-width: 1180px;
`;
