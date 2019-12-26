import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container } from './styles';

export default function PageNavigation({ pages, currentPage, setCurrentPage }) {
  console.tron.log(pages);
  return (
    <Container>
      <button disabled={currentPage <= 1} type="button">
        <MdKeyboardArrowLeft size={20} color="#fff" />
      </button>
      <span>{currentPage}</span>
      <button disabled={currentPage >= pages} type="button">
        <MdKeyboardArrowRight size={20} color="#fff" />
      </button>
    </Container>
  );
}
