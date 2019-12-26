import React, { useState, useEffect } from 'react';
import { Input, Form } from '@rocketseat/unform';

import history from '~/services/history';
import api from '~/services/api';

import { Container, ContentWrapper } from './styles';
import { SubHeader } from '~/components/SubHeader/styles';
import Button from '~/components/Button';

export default function SubscriptionForm({ match }) {
  const { id } = match.params;

  const [student, setStudent] = useState();

  useEffect(() => {
    if (id) {
      // const response = await api.get()
    }
  }, []);

  async function handleSubmit({ name, email, age, weight, height }) {
    if (id) {
      await api.put('students', {
        name,
        email,
        age,
        weight,
        height,
      });
    } else {
      await api.post('students', {
        name,
        email,
        age,
        weight,
        height,
      });
    }
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
