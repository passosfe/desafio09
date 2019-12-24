import styled from 'styled-components';

export const TextButton = styled.button`
  background: none;
  border: 0;
  font-size: 15px;
  color: #de3b3b;

  a + & {
    margin-left: 23px;
  }
`;
