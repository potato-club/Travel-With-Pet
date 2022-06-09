import styled from 'styled-components';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { TabsCategory } from './TabsCategory';
import { useState } from 'react';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { CustomPagination } from 'src/components/CustomPagination';

export const MyComments = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const pieceNumber = 10;
  InformationBoard.map((data, index) => {
    if (
      index < (activePage - 1) * pieceNumber ||
      index > activePage * pieceNumber - 1
    ) {
      return;
    }
  });

  return (
    <>
      <TabsCategory text={'내가 작성한 댓글'} />
      {InformationBoard.map(item => (
        <Item key={item.owner.name} onClick={() => {}}>
          <PreviewContainer>
            <PreviewWrapper>
              <HrSmall />
              <PreviewPic />
              <PreviewText>
                <TypoGraphy type="body1" fontWeight="bold">
                  {/* {item.Text} */}이 텍스트는 정적으로 만든거임. 고쳐야함.
                </TypoGraphy>
                <TypoGraphy type="body3" color="gray">
                  {item.owner.name}
                </TypoGraphy>
              </PreviewText>
            </PreviewWrapper>
          </PreviewContainer>
        </Item>
      ))}
      <CustomPagination
        activePage={activePage}
        itemsCountPerPage={pieceNumber}
        totalItemsCount={InformationBoard.length}
        onChange={e => setActivePage(e)}
      />
    </>
  );
};

const Item = styled.div``;

const HrSmall = styled.hr`
  width: 960px;
`;
const PreviewWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: 72px;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 16px;
`;

const PreviewPic = styled.div`
  width: 40px;
  height: 40px;
  color: black;
  background-color: black;
`;

const PreviewText = styled.div`
  display: flex;
  flex: flex-around;
  flex-direction: column;
  gap: 16px;
`;

const PreviewContainer = styled.div``;
