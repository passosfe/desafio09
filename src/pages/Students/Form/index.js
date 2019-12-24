import React from 'react';
import { Input, Form } from '@rocketseat/unform';

import history from '~/services/history';

import { Container } from './styles';
import { SubHeader } from '~/components/SubHeader/styles';
import { ContentWrapper } from '~/components/ContentWrapper/styles';
import Button from '~/components/Button';

export default function StudentForm({ match }) {
  const { id } = match.params;

  function handleSubmit() {
    console.tron.log('teste');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SubHeader>
          <strong>{id ? 'Edição de aluno' : 'Cadastro de aluno'}</strong>
          <div>
            <Button onClick={() => history.goBack()}>VOLTAR</Button>
            <Button type="submit">SALVAR</Button>
          </div>
        </SubHeader>
        <ContentWrapper>
          <strong>NOME COMPLETO</strong>
          <Input name="name" placeholder="John Doe" />

          <strong>ENDEREÇO DE E-MAIL</strong>
          <Input name="email" placeholder="exemplo@email.com" />

          <div>
            <div>
              <strong>IDADE</strong>
              <Input name="age" />
            </div>
            <div>
              <strong>PESO (em kg)</strong>
              <Input name="weight" />
            </div>
            <div>
              <strong>ALTURA</strong>
              <Input name="height" />
            </div>
          </div>
        </ContentWrapper>
      </Form>
    </Container>
  );
}
