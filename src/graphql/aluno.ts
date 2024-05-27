import { gql } from "@apollo/client";

export const CREATE_ALUNO = gql`
  mutation MyMutation(
    $nome: String!
    $matricula: Int!
    $idade: Int!
    $genero: Genders!
    $email: String!
    $idCurso: ID!
    $ano: Ano!
  ) {
    createAluno(
      data: {
        name: $nome
        matricula: $matricula
        idade: $idade
        generos: $genero
        email: $email
        anoAcademico: $ano
        curso: { connect: { id: $idCurso } }
      }
    ) {
      name
      matricula
      curso {
        nome
      }
    }
    publishAluno(where: { email: $email }) {
      id
    }
  }
`;

export const GET_ALUNOS = gql`
  query MyQuery {
    alunos {
      id
      nome
      email
    }
  }
`;

export const GET_ALUNO_BY_EMAIL = gql`
  query MyQuery {
    aluno(where: { email: $email }) {
      name
      email
    }
  }
`;
