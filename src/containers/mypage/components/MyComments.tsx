import { customColor } from 'src/constants';
import styled from 'styled-components';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { FaHeart } from 'react-icons/fa';
import { TabsCategory } from './TabsCategory';
import { useState } from 'react';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { CustomPagination } from 'src/components/CustomPagination';
type ItemProps = {
  selected: boolean;
};

type Selected = {
  Text: string;
  Writer: string;
};

export const MyComments = () => {
  const [selectedCategory, setSelectedCategory] = useState<Selected>({
    Text: '한줄이면 이렇게 출력',
    Writer: '글쓴이닉네임',
  });
  const [activePage, setActivePage] = useState<number>(1);
  return (
    <>
      {}
      <TabsCategory text={'내가 작성한 댓글'} />
      {InformationBoard.map(item => (
        <Item
          key={item.owner.name}
          // selected={selectedCategory.Writer === item.Writer}
          onClick={() => {
            // setSelectedCategory(item);
          }}
        >
          <PreviewContainer2>
            <PreviewContainer>
              <PreviewContainerPadding>
                <PreviewPic />
              </PreviewContainerPadding>
              <PreviewContainerPadding>
                <TypoGraphy type="body1" fontWeight="bold">
                  {/* {item.Text} */}이 텍스트는 정적으로 만든거임. 고쳐야함.
                </TypoGraphy>
                <PreviewContainerPadding />
                <TypoGraphy type="body3" color="gray">
                  {item.owner.name}
                </TypoGraphy>
              </PreviewContainerPadding>
            </PreviewContainer>
            <HrSmall />
          </PreviewContainer2>
        </Item>
      ))}
      <CustomPagination
        activePage={activePage}
        itemsCountPerPage={5}
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

const PreviewContainer = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: 72px;
`;

const PreviewPic = styled.div`
  width: 40px;
  height: 40px;
  color: black;
  background-color: black;
`;

const PreviewContainerPadding = styled.div`
  margin: 12px;
`;

const PreviewContainer2 = styled.div``;
