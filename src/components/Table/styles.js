import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;

  thead {
    tr {
      padding-bottom: 20px;
    }
    th {
      color: #444;
      font-size: 16px;
      text-align: left;
    }
  }

  tbody > tr:first-child > td {
    padding: 16px 0;
  }

  tbody > tr + tr > td {
    padding: 16px 0;
    border-top: 1px solid #eee;
  }
`;
