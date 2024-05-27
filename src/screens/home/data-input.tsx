import { View, Text } from 'react-native';
import PickerInput from '../../components/picker-input';
import { styles } from './styles';
import { PickerOption } from './home.types';

interface DataInputProps {
  label: string;
  value: string;
  toggle: boolean;
  selectedValue: number;
  setValue: (value: string) => void;
  items: ReadonlyArray<PickerOption>;
  setToggle: (toggle: boolean) => void;
  setSelectedValue: (value: number) => void;
}

const DataInput: React.FC<DataInputProps> = ({
  items,
  label,
  value,
  toggle,
  setValue,
  setToggle,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={styles.inputs}>
    <Text>{label}</Text>
    <PickerInput
      items={items.map(({ label, selectedValue }) => ({
        label: label,
        selectedValue: selectedValue,
      }))}
      placeholder={label}
      textValue={value}
      togglePicker={toggle}
      setTogglePicker={setToggle}
      selectedValue={selectedValue}
      onChangeText={setValue}
      onChange={(itemValue, itemIndex) => {
        setSelectedValue(itemValue);
        setToggle(false);
      }}
    />
  </View>
);

export default DataInput;
