import { createContext, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { customColor } from 'src/constants';

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
      {isLoading && (
        <LoadingContainer>
          <SpinnerWrapper>
            <LoadingSpinner color={customColor.brown} size={200} />
          </SpinnerWrapper>
        </LoadingContainer>
      )}
      {children}
    </LoadingProvider.Provider>
  );
};

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #35393b80;
  z-index: 100;
`;
const SpinnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const LoadingSpinner = styled(AiOutlineLoading3Quarters)`
  animation: spin 2s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
