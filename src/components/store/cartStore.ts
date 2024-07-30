import { create } from "zustand";

interface State {
  count: number;
  cadeiras: string;
  pressao: string;
  stress: string;
  apoioEmocional: string;
  apoioFinanceiro: string;
  diFinanceira: string;
  emprego: string;
  distancia: string;
  setCadeiras: (cadeiras: string) => void;
  setPressao: (pressao: string) => void;
  setStress: (stress: string) => void;
  setApoioEmocional: (apoioEmocional: string) => void;
  setApoioFinanceiro: (apoioFinanceiro: string) => void;
  setDiFinanceira: (diFinanceira: string) => void;
  setEmprego: (emprego: string) => void;
  setDistancia: (distancia: string) => void;
}
const useStore = create<State>((set) => ({
  count: 0,
  cadeiras: "",
  pressao: "",
  stress: "",
  apoioEmocional: "",
  apoioFinanceiro: "",
  diFinanceira: "",
  emprego: "",
  distancia: "",
  setApoioEmocional: (apoioEmocional) => set({ apoioEmocional }),
  setCadeiras: (cadeiras) => set({ cadeiras }),
  setPressao: (pressao) => set({ pressao }),
  setStress: (stress) => ({ stress }),
  setEmprego: (emprego) => set({ emprego }),
  setDiFinanceira: (diFinanceira) => set({ diFinanceira }),
  setDistancia: (distancia) => set({ distancia }),
  setApoioFinanceiro: (apoioFinanceiro) => set({ apoioFinanceiro }),
}));

export default useStore;
