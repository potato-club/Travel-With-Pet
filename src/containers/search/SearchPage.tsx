import { SearchBox } from './components/SearchBox';
import { SearchBoxVer2 } from './components/SearchBoxVer2';
import * as S from './SearchPage.style';
export const SearchPage = () => {
  return (
    <S.Container>
      {/* <SearchBox /> */}
      <SearchBoxVer2 />
    </S.Container>
  );
};
