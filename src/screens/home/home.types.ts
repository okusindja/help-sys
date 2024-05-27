export interface PickerOption {
  label: string;
  selectedValue: number;
}

export interface PickerToggles {
  pressao: boolean;
  stress: boolean;
  emprego: boolean;
  financa: boolean;
  apoio: boolean;
  dificult: boolean;
  distancia: boolean;
}

export interface HomeState {
  isPsicologicVisible: boolean;
  isFinanceVisible: boolean;
  isSocialVisible: boolean;
  pressaoValue: number;
  pressaoText: string;
  stressValue: number;
  stressText: string;
  empregoValue: number;
  empregoText: string;
  financaValue: number;
  financaText: string;
  apoioValue: number;
  apoioText: string;
  dificultValue: number;
  dificultText: string;
  distanciaValue: number;
  distanciaText: string;
  pickerToggles: PickerToggles;
}

export interface User {
  email: string;
}
