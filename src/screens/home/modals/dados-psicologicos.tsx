// DadosPsicologicos.tsx
import React, { useState } from 'react';
import InfoModal from '../info-modal';
import DataInput from '../data-input';
import { PickerOption, PickerToggles } from '../home.types'; // Ensure these types are defined properly
import { Button } from 'react-native';

interface DadosPsicologicosProps {
  pickerOptions: { [key: string]: PickerOption[] };
}

const DadosPsicologicos: React.FC<DadosPsicologicosProps> = ({
  pickerOptions,
}) => {
  const [localState, setLocalState] = useState({
    pressaoText: 'Entre 80PA e 120PA',
    pressaoValue: 1,
    stressText: 'Não',
    reticaoText: "Nao",
    repeticaoValue: 1,
    apoioEmocionalText: "Nao",
    apoioEmocionalValue: 1,
    stressValue: 2,
    pickerToggles: {
      pressao: false,
      stress: false,
      repeticao: false,
      apoioEmocional: false,
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
    <>
    <DataInput
      label='Ja repetiu cadeiras'
      value={localState.reticaoText}
      items={pickerOptions.repeticao}
      setValue={(value) =>
        setLocalState((prev) => ({ ...prev, reticaoText: value }))
      }
      selectedValue={localState.repeticaoValue}
      setSelectedValue={(value) => setPickerValue('repeticao', value)}
      toggle={localState.pickerToggles.repeticao}
      setToggle={() =>
        setLocalState((prev) => ({
          ...prev,
          pickerToggles: {
            ...prev.pickerToggles,
            repeticao: !prev.pickerToggles.repeticao,
          },
        }))
      }
    />
      <DataInput
        label='Pressão'
        value={localState.pressaoText}
        items={pickerOptions.pressao}
        setValue={(value) =>
          setLocalState((prev) => ({ ...prev, pressaoText: value }))
        }
        selectedValue={localState.pressaoValue}
        setSelectedValue={(value) => setPickerValue('pressao', value)}
        toggle={localState.pickerToggles.pressao}
        setToggle={() =>
          setLocalState((prev) => ({
            ...prev,
            pickerToggles: {
              ...prev.pickerToggles,
              pressao: !prev.pickerToggles.pressao,
            },
          }))
        }
      />
      <DataInput
        label='Stress'
        value={localState.stressText}
        items={pickerOptions.stress}
        setValue={(value) =>
          setLocalState((prev) => ({ ...prev, stressText: value }))
        }
        selectedValue={localState.stressValue}
        setSelectedValue={(value) => setPickerValue('stress', value)}
        toggle={localState.pickerToggles.stress}
        setToggle={() =>
          setLocalState((prev) => ({
            ...prev,
            pickerToggles: {
              ...prev.pickerToggles,
              stress: !prev.pickerToggles.stress,
            },
          }))
        }
      />
      <DataInput
        label='Apoio emocional'
        value={localState.stressText}
        items={pickerOptions.stress}
        setValue={(value) =>
          setLocalState((prev) => ({ ...prev, stressText: value }))
        }
        selectedValue={localState.stressValue}
        setSelectedValue={(value) => setPickerValue('stress', value)}
        toggle={localState.pickerToggles.stress}
        setToggle={() =>
          setLocalState((prev) => ({
            ...prev,
            pickerToggles: {
              ...prev.pickerToggles,
              stress: !prev.pickerToggles.stress,
            },
          }))
        }
      />
      </>
  );
};

export default DadosPsicologicos;
