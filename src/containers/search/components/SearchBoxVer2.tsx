import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { CustomButton, TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { categoryType } from '../SearchPage';

const category: categoryType[] = ['정보', '일상'];

type Props = {
  queryData: string;
  handleSearch: (inputData: string) => void;
  setSelectedCategory: Dispatch<SetStateAction<categoryType>>;
  selectedCategory: categoryType;
};
export const SearchBoxVer2 = ({
  queryData,
  handleSearch,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  const inputData = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputData.current) {
      if (queryData === 'undefined') {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        queryData = '';
      }
      inputData.current.value = queryData;
    }
  }, [queryData]);

  const handleCategory = (props: categoryType) => {
    setSelectedCategory(props);
  };

  const handleSearchButton = () => {
    if (inputData.current && inputData.current.value) {
      handleSearch(inputData.current.value);
    } else {
      alert('검색할 값을 입력해주세요');
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchButton();
    }
  };

  return (
    <Container>
      <BodyList>
        {category.map((props, i) => (
          <CategoryBody
            key={i}
            onClick={() => handleCategory(props)}
            isActive={selectedCategory === props}
          >
            <TypoGraphy
              type="body1"
              color={
                selectedCategory === props
                  ? customColor.brownDark
                  : customColor.blackLight
              }
              fontWeight={selectedCategory === props ? 'bold' : 'none'}
            >
              {props}
            </TypoGraphy>
          </CategoryBody>
        ))}
      </BodyList>
      <InputContainer>
        <InputBox
          ref={inputData}
          onKeyDown={e => {
            handleKeyDown(e);
          }}
        />
        <ButtonWrapper>
          <CustomButton
            text={'검색'}
            width={100}
            height={50}
            borderRadius={8}
            onClick={handleSearchButton}
          />
        </ButtonWrapper>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1178px;
  margin-top: 50px;
  margin-bottom: 60px;
`;

const BodyList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const CategoryBody = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  div {
    cursor: pointer;
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${customColor.brownDark};
  border-radius: 8px;
  width: 100%;
  height: 50px;
  background-color: ${customColor.white};
`;

const InputBox = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 2px;
  background-color: transparent;
`;
const ButtonWrapper = styled.div``;
