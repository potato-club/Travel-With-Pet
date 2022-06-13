import { useEffect, useState } from 'react';
import { PhotoCardList, TypoGraphy } from 'src/components';
import { CustomPagination } from 'src/components/CustomPagination';
import ListContents from 'src/components/daily/ListContents';
import ListHeader from 'src/components/daily/ListHeader';
import { DailyBoardData } from 'src/dummy/dailyInfo';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { DailyBoardType, InformationBoardType } from 'src/types/board.type';
import { SearchBoxVer2 } from './components/SearchBoxVer2';
import * as S from './SearchPage.style';

export type categoryType = '정보' | '일상';

export const SearchPage = ({ queryData }: { queryData: string }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<categoryType>('정보');

  const [list, setList] = useState<any[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [photoCardInfoPiece, setPhotoCardInfoPiece] = useState<
    InformationBoardType[]
  >([]);
  const [dailyInfoPiece, setDailyInfoPiece] = useState<DailyBoardType[]>([]);
  const pieceNumber = 16;

  useEffect(() => {
    setList(InformationBoard.filter(item => item.contents.includes(queryData)));
  }, [queryData]);

  const handleSearch = (inputData: string) => {
    // setPhotoCardInfoPiece([]);
    // setDailyInfoPiece([]);

    if (selectedCategory === '정보') {
      setList(
        InformationBoard.filter(item => item.contents.includes(inputData)),
      );
    } else {
      setList(
        DailyBoardData.filter(
          item =>
            item.title.includes(inputData) || item.contents.includes(inputData),
        ),
      );
    }
  };
  useEffect(() => {
    setPhotoCardInfoPiece([]);
    setDailyInfoPiece([]);
    setList([]);
  }, [selectedCategory]);
  useEffect(() => {
    setPhotoCardInfoPiece([]);
    setDailyInfoPiece([]);
    [...list].reverse().map((data, index) => {
      if (
        index < (activePage - 1) * pieceNumber ||
        index > activePage * pieceNumber - 1
      ) {
        return;
      }
      if (selectedCategory === '정보') {
        setPhotoCardInfoPiece(prev => prev.concat(data));
      } else {
        setDailyInfoPiece(prev => prev.concat(data));
      }
    });
  }, [activePage, list]);

  return (
    <S.Container>
      <SearchBoxVer2
        queryData={queryData}
        handleSearch={handleSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <S.ListHeader>검색결과</S.ListHeader>
      <S.ListContainer>
        {list.length !== 0 ? (
          <>
            {selectedCategory === '정보' ? (
              <>
                <PhotoCardList
                  type={'MainPage'}
                  photoCardInfo={photoCardInfoPiece}
                />
                <CustomPagination
                  activePage={activePage}
                  itemsCountPerPage={pieceNumber}
                  totalItemsCount={list.length}
                  onChange={e => setActivePage(e)}
                />
              </>
            ) : (
              <>
                <ListHeader />
                <ListContents
                  activePage={activePage}
                  pieceNumber={pieceNumber}
                  dailyData={dailyInfoPiece}
                />
                <CustomPagination
                  activePage={activePage}
                  itemsCountPerPage={pieceNumber}
                  totalItemsCount={list.length}
                  onChange={e => setActivePage(e)}
                />
              </>
            )}
          </>
        ) : (
          <S.EmptyWrapper>
            <TypoGraphy type="h2">검색 결과가 없습니다.</TypoGraphy>
          </S.EmptyWrapper>
        )}
      </S.ListContainer>
    </S.Container>
  );
};
