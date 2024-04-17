interface PickerItem {
  label: string;
  selectedValue: number;
}

export interface PickerInputProps {
  togglePicker?: boolean; // Se o picker pode ser escondido
  setTogglePicker?: (togglePicker: boolean) => void; // Função para manipular a visibilidade do picker
  selectedValue: number; // Valor selecionado atualmente
  onChange: (itemValue: number, itemIndex: number) => void; // Função para manipular a mudança de valor
  items: PickerItem[]; // Array dos itens a serem mostrados no picker
}
