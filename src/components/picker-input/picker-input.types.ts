interface PickerItem {
  label: string;
  value: number | string;
}

export interface PickerInputProps {
  selectedValue: number; // Valor selecionado atualmente
  onChange: (itemValue: number, itemIndex: number) => void; // Função para manipular a mudança de valor
  items: PickerItem[]; // Array dos itens a serem mostrados no picker
}
