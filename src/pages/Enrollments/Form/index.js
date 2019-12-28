import React, { useState, useEffect } from 'react';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { subDays } from 'date-fns';
import { formatPrice } from '~/util/format';
import history from '~/services/history';
import api from '~/services/api';

import { Container, ContentWrapper, Divider } from './styles';
import { SubHeader } from '~/components/SubHeader/styles';
import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';
import SelectInput from '~/components/SelectInput';

export default function EnrollmentForm({ match }) {
  const [enrollment, setEnrollment] = useState({});
  const [subscription, setSubscription] = useState('');
  const [startDate, setStartDate] = useState('');

  const { id } = match.params;

  const schema = Yup.object().shape({
    name: Yup.array()
      .typeError('Escolha o aluno')
      .required('Aluno é obrigatório'),
    title: Yup.array()
      .typeError('Escolha o plano')
      .required('Plano é obrigatório'),
    start_date: Yup.date()
      .min(subDays(new Date(), 5))
      .required('Data de início é obrigatória'),
  });

  useEffect(() => {
    async function loadEnrollment() {
      const response = await api.get(`subscriptions/${id}`);

      // const { title, duration, price: unfPrice } = response.data;

      // setEnrollment({
      //   title,
      //   duration,
      //   total: formatPrice(Number(duration) * Number(unfPrice)),
      // });
    }

    if (id) {
      loadEnrollment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function handleSubmit({ name, title, start_date }) {
    console.tron.log(name, title, start_date, subscription, startDate);
    // if (id) {
    //   try {
    //     await api.put(`enrollments/${id}`, {
    //       title,
    //       duration,
    //     });
    //     toast.success('Matrícula atualizado');
    //     history.goBack();
    //   } catch (err) {
    //     toast.error('Erro ao atualizar, verifique novamente os dados');
    //   }
    // } else {
    //   try {
    //     await api.post('/enrollments', {
    //       title,
    //       duration,
    //     });
    //     toast.success('Matrícula cadastrado');
    //     history.goBack();
    //   } catch (err) {
    //     toast.error('Erro ao cadastrar, verifique novamente os dados');
    //   }
    // }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SubHeader>
          <h1>{id ? 'Edição de matrícula' : 'Cadastro de matrícula'}</h1>
          <div>
            <Button onClick={() => history.goBack()}>VOLTAR</Button>
            <Button type="submit">SALVAR</Button>
          </div>
        </SubHeader>
        <ContentWrapper>
          <strong>ALUNO</strong>
          <SelectInput name="name" from="students" placeholder="Buscar aluno" />

          <Divider>
            <div>
              <strong>PLANO</strong>
              <SelectInput
                name="title"
                from="subscriptions"
                placeholder="Selecione o plano"
                setSubscription={setSubscription}
              />
            </div>
            <div>
              <strong>DATA DE INÍCIO</strong>
              <DatePicker
                name="start_date"
                placeholder="Escolha a data"
                onChange={setStartDate}
              />
            </div>
            <div>
              <strong>DATA DE TÉRMINO</strong>
              <DatePicker name="end_date" disabled />
            </div>
            <div>
              <strong>VALOR FINAL</strong>
              <Input name="total" disabled />
            </div>
          </Divider>
        </ContentWrapper>
      </Form>
    </Container>
  );
}

EnrollmentForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

EnrollmentForm.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
