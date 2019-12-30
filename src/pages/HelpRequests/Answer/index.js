import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import '~/styles/alternative-confirm-alert.css';

import api from '~/services/api';

import { Container, Submit } from './styles';

export default function Answer({ id, question }) {
  async function handleSubmit({ answer }) {
    try {
      await api.post(`/help-orders/${id}/answer`, {
        answer,
      });
      toast.success('Resposta enviada');
    } catch (err) {
      toast.error('Erro ao enviar resposta');
    }
  }

  return confirmAlert({
    // eslint-disable-next-line react/prop-types
    customUI: ({ onClose }) => {
      return (
        <>
          <Container>
            <Form
              onSubmit={data => {
                handleSubmit(data);
                onClose();
              }}
            >
              <strong>PERGUNTA DO ALUNO</strong>
              <p>{question}</p>

              <div>
                <strong>SUA RESPOSTA</strong>
                <Input
                  name="answer"
                  type="text"
                  multiline
                  placeholder="Responda aqui"
                />
              </div>

              <Submit type="submit">Responder aluno</Submit>
            </Form>
          </Container>
        </>
      );
    },
  });
}
