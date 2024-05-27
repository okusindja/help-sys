// DadosSociais.tsx
import React, { useState } from 'react';
import InfoModal from '../info-modal';
import DataInput from '../data-input';
import { PickerOption, PickerToggles } from '../home.types';
import { Button } from 'react-native';

interface DadosSociaisProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  pickerOptions: { [key: string]: PickerOption[] };
}

const DadosSociais: React.FC<DadosSociaisProps> = ({
  isVisible,
  toggleVisibility,
  pickerOptions,
}) => {
  const [localState, setLocalState] = useState({
    distanciaText: 'Muito Proximo',
    distanciaValue: 1,
    pickerToggles: {
      distancia: false,
    },
  });

  const setPickerValue = (picker: keyof PickerToggles, value: number) => {
    const newText =
      pickerOptions[picker].find((p) => p.selectedValue === value)?.label || '';
    setLocalState((prev) => ({
      ...prev,
      [`${picker}Text`]: newText,
      [`${picker}Value`]: value,
      pickerToggles: { ...prev.pickerToggles, [picker]: false },
    }));
  };

  return (
    <InfoModal
      isVisible={isVisible}
      toggleVisibility={toggleVisibility}
      title='Dados Sociais'
    >
      <DataInput
        label='Distância'
        value={localState.distanciaText}
        items={pickerOptions.distancia}
        setValue={(value) =>
          setLocalState((prev) => ({ ...prev, distanciaText: value }))
        }
        selectedValue={localState.distanciaValue}
        setSelectedValue={(value) => setPickerValue('distancia', value)}
        toggle={localState.pickerToggles.distancia}
        setToggle={() =>
          setLocalState((prev) => ({
            ...prev,
            pickerToggles: {
              ...prev.pickerToggles,
              distancia: !prev.pickerToggles.distancia,
            },
          }))
        }
      />
      <Button title='Salvar' onPress={toggleVisibility} />
    </InfoModal>
  );
};

export default DadosSociais;
