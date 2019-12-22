import React from 'react';

import { Container, Search } from './styles';
import Button from '~/components/Button';
import { SubHeader } from '~/components/SubHeader/styles';
import { Title } from '~/components/Title/styles';
import { ContentWrapper } from '~/components/ContentWrapper/styles';
import { Table } from '~/components/Table/styles';

export default function Students() {
  return (
    <Container>
      <SubHeader>
        <Title>Gerenciando alunos</Title>
        <div>
          <Button>CADASTRAR</Button>
          <Search type="text" placeholder="Buscar aluno" />
        </div>
      </SubHeader>
      <ContentWrapper>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@teste.com</td>
              <td>20</td>
              <td>editar | apagar</td>
            </tr>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@teste.com</td>
              <td>20</td>
              <td>editar | apagar</td>
            </tr>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@teste.com</td>
              <td>20</td>
              <td>editar | apagar</td>
            </tr>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@teste.com</td>
              <td>20</td>
              <td>editar | apagar</td>
            </tr>
          </tbody>
        </Table>
      </ContentWrapper>
    </Container>
  );
}
