import { createContext, ReactNode, useState } from 'react';
import styled from 'styled-components';

export const LoadingProvider = createContext({
  onLoading: () => {},
  offLoading: () => {},
});

type Props = {
  children: ReactNode;
};

export const LoadingContext = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const onLoading = () => {
    setIsLoading(true);
  };
  const offLoading = () => {
    setIsLoading(false);
  };

  return (
      <LoadingProvider.Provider value={{ onLoading, offLoading }}>
        {isLoading && <Loading />}
        {children}
      </LoadingProvider.Provider>
  );
};

const Loading = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #28aeec80;
  z-index: 100;
`;
