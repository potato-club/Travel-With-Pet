import { useContext } from 'react';
import { LoadingProvider } from 'src/context/LoadingContext';

export const useLoading = () => {
  const { onLoading, offLoading } = useContext(LoadingProvider);
  return { onLoading, offLoading };
};
