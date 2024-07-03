import { Platform, StyleSheet } from "react-native";
import React, { FC } from "react";
import { Picker } from "@react-native-picker/picker";
import { PickerInputProps } from "./picker-input.types";
import Input from "../input";
import { InputProps } from "../input/input.types";
import { scale } from "react-native-size-matters";

const PickerInput: FC<PickerInputProps & InputProps> = ({
  items,
  onChange,
  textValue,
  placeholder,
  togglePicker,
  color,
  onChangeText,
  selectedValue,
  setTogglePicker,
}) => {
  return (
    <>
      {Platform.OS === 'android' ? (
        <Picker
          mode='dialog'
          style={styles.pickerStyle}
          selectedValue={selectedValue}
          onValueChange={onChange}
        >
          {items.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.label}
              value={item.selectedValue}
            />
          ))}
        </Picker>
      ) : (
        <>
          <Input
            color={color}
            editable={false}
            textValue={textValue}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onPressIn={() => setTogglePicker && setTogglePicker(!togglePicker)}
          />
          {togglePicker && (
            <Picker
              mode='dialog'
              onValueChange={onChange}
              style={styles.pickerStyle}
              selectedValue={selectedValue}
            >
              {items.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.label}
                  value={item.selectedValue}
                />
              ))}
            </Picker>
          )}
        </>
      )}
    </>
  );
};
export default PickerInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: scale(12),
    borderColor: "#C3C3C3",
  },
  button: {
    margin: 12,
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#FFC423",
  },
  buttonText: {
    margin: 12,
    color: "white",
  },
  textAlign: {
    left: 14,
  },
  pickerStyle: {
    margin: 12,
    borderColor: "blue",
    backgroundColor: "#E9E9E9",
  },
});
