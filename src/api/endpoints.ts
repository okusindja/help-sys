import axiosInstance from "./axiosInstance";

async function getAllAlunos() {
  const response = await axiosInstance.get("/estudante");
  return response.data;
}
async function getAllSemestres() {
  const response = await axiosInstance.get("/semestre");
  return response.data;
}
async function getAllCursos() {
  const response = await axiosInstance.get("/curso");
  return response.data;
}

async function createCoordenador(data) {
  const response = await axiosInstance.post("/coordenador", data);
  return response;
}

async function createCurso(data) {
  const response = await axiosInstance.post("/curso", data);
  return response;
}
async function createSemestre(data) {
  const response = await axiosInstance.post("/semestre", data);
  return response;
}
async function createAluno(data) {
  const response = await axiosInstance.post("/estudante", data);
  return response;
}
export default {
  getAllAlunos,
  getAllSemestres,
  createCoordenador,
  createCurso,
  createSemestre,
  createAluno,
  getAllCursos,
};
