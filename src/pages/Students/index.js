import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import Button from '~/components/Button';
import { SubHeader } from '~/components/SubHeader/styles';
import { ContentWrapper } from '~/components/ContentWrapper/styles';
import { Table } from '~/components/Table/styles';
import { TextButton } from '~/components/TextButton/styles';

import { Container, Search } from './styles';
import history from '~/services/history';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data);
    }

    loadStudents();
  }, []);

  function handleAdd() {
    console.tron.log('teste');
    history.push('/students/add');
  }

  function handleDelete(id) {
    console.tron.log(id);
  }

  return (
    <Container>
      <SubHeader>
        <strong>Gerenciando alunos</strong>
        <div>
          <Button onClick={() => handleAdd()}>CADASTRAR</Button>
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
            {students.map(student => (
              <tr key={String(student.id)}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <div>
                    <Link to={`/students/${student.id}`}>editar</Link>
                    <TextButton onClick={() => handleDelete(student.id)}>
                      apagar
                    </TextButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContentWrapper>
    </Container>
  );
}
