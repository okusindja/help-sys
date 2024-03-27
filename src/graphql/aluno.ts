import { gql } from "@apollo/client";

export const CREATE_ALUNO = gql`
  mutation MyMutation(
    $nome: String!
    $matricula: Int!
    $idade: Int!
    $genero: Genders
    $authId: String
    $curso: CursoWhereUniqueInput
  ) {
    createAluno(
      data: {
        name: $nome
        matricula: $matricula
        idade: $idade
        generos: $genero
        authId: $authId
        curso: $curso
      }
    ) {
      name
      matricula
    }
    publishAluno(where: { authId: $authId })
  }
`;
