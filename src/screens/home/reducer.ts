import { HomeState } from './home.types';

export const initialState: HomeState = {
  isPsicologicVisible: false,
  isFinanceVisible: false,
  isSocialVisible: false,
  pressaoValue: 1,
  pressaoText: 'Entre 80PA e 120PA',
  stressValue: 1,
  stressText: 'Não',
  empregoValue: 1,
  empregoText: 'Não',
  financaValue: 1,
  financaText: 'Não',
  apoioValue: 1,
  apoioText: 'Não',
  dificultValue: 1,
  dificultText: 'Não',
  distanciaValue: 1,
  distanciaText: 'Muito Proximo',
  pickerToggles: {
    pressao: false,
    stress: false,
    emprego: false,
    financa: false,
    apoio: false,
    dificult: false,
    distancia: false,
  },
};

type Action =
  | { type: 'TOGGLE_MODAL'; modal: keyof HomeState }
  | { type: 'SET_PICKER_OPTION'; key: keyof HomeState; value: any }
  | { type: 'TOGGLE_PICKER'; picker: keyof HomeState['pickerToggles'] };

export const reducer = (state: HomeState, action: Action): HomeState => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { ...state, [action.modal]: !state[action.modal] };
    case 'SET_PICKER_OPTION':
      return { ...state, [action.key]: action.value };
    case 'TOGGLE_PICKER':
      return {
        ...state,
        pickerToggles: {
          ...state.pickerToggles,
          [action.picker]: !state.pickerToggles[action.picker],
        },
      };
    default:
      return state;
  }
};
