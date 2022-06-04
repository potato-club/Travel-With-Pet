import { customColor } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1178px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 100px;
`;

export const ListHeader = styled.div`
  width: 100%;
  max-width: 1178px;
  border-top: 1px solid ${customColor.gray};
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 30px;
`;
export const ListContainer = styled.div`
  width: 100%;
  max-width: 1178px;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
