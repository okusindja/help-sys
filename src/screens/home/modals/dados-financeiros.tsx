// DadosFinanceiros.tsx
import React, { useState } from 'react';
import InfoModal from '../info-modal';
import DataInput from '../data-input';
import { PickerOption, PickerToggles } from '../home.types';
import { Button } from 'react-native';

interface DadosFinanceirosProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  pickerOptions: { [key: string]: PickerOption[] };
}

const DadosFinanceiros: React.FC<DadosFinanceirosProps> = ({
  isVisible,
  toggleVisibility,
  pickerOptions,
}) => {
  const [localState, setLocalState] = useState({
    empregoText: 'Não',
    empregoValue: 2,
    financaText: 'Não',
    financaValue: 2,
    pickerToggles: {
      emprego: false,
      financa: false,
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
      title='Dados Financeiros'
    >
      <DataInput
        label='Emprego'
        value={localState.empregoText}
        items={pickerOptions.emprego}
        setValue={(value) =>
          setLocalState((prev) => ({ ...prev, empregoText: value }))
        }
        selectedValue={localState.empregoValue}
        setSelectedValue={(value) => setPickerValue('emprego', value)}
        toggle={localState.pickerToggles.emprego}
        setToggle={() =>
          setLocalState((prev) => ({
            ...prev,
            pickerToggles: {
              ...prev.pickerToggles,
              emprego: !prev.pickerToggles.emprego,
            },
          }))
        }
      />
      <DataInput
        label='Apoio Financeiro'
        value={localState.financaText}
        items={pickerOptions.financa}
        setValue={(value) =>
          setLocalState((prev) => ({ ...prev, financaText: value }))
        }
        selectedValue={localState.financaValue}
        setSelectedValue={(value) => setPickerValue('financa', value)}
        toggle={localState.pickerToggles.financa}
        setToggle={() =>
          setLocalState((prev) => ({
            ...prev,
            pickerToggles: {
              ...prev.pickerToggles,
              financa: !prev.pickerToggles.financa,
            },
          }))
        }
      />
      <Button title='Salvar' onPress={toggleVisibility} />
    </InfoModal>
  );
};

export default DadosFinanceiros;
