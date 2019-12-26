import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Button from '~/components/Button';
import { SubHeader } from '~/components/SubHeader/styles';
import { Table } from '~/components/Table/styles';
import { TextButton } from '~/components/TextButton/styles';

import { Container, ContentWrapper, Search } from './styles';
import history from '~/services/history';
import PageNavigation from '~/components/PageNavigation';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState('');
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadStudents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/students', {
        params: {
          page: currentPage,
          per_page: 10,
          name: filter,
        },
      });
      console.tron.log(response.headers);

      setStudents(response.data);
      setPages(Number(response.headers.num_pages));
    } catch (err) {
      toast.error('Erro ao carregar lista de alunos');
    } finally {
      setLoading(false);
    }
  }, [currentPage, filter]);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  function handleDelete(student) {
    // ConfirmDialog({
    //   title: 'Apagar aluno',
    //   onConfirm: deleteUser,
    //   content: (
    //     <p>
    //       Tem certeza que deseja apagar o aluno <strong>{student.name} </strong>
    //       ?
    //     </p>
    //   ),
    // });
  }

  return (
    <Container>
      <SubHeader>
        <h1>Gerenciando alunos</h1>
        <div>
          <Button onClick={() => history.push('/students/add')}>
            CADASTRAR
          </Button>
          <Search
            type="text"
            placeholder="Buscar aluno"
            onChange={e => setFilter(e.target.value)}
          />
        </div>
      </SubHeader>
      <ContentWrapper>
        {students.length > 0 ? (
          <>
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
                        <Link
                          to={{
                            pathname: `/students/${student.id}`,
                            state: student,
                          }}
                        >
                          editar
                        </Link>
                        <TextButton onClick={() => handleDelete(student.id)}>
                          apagar
                        </TextButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <PageNavigation
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <h1>nada</h1>
        )}
      </ContentWrapper>
    </Container>
  );
}
