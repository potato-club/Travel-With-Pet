import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SearchPage } from 'src/containers/search/SearchPage';

const Search: NextPage = () => {
  const router = useRouter();
  return <SearchPage queryData={String(router.query.search)} />;
};

export default Search;
