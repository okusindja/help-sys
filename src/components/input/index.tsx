import { TextInput, StyleSheet } from "react-native";
import React, { FC } from "react";
import { scale } from "react-native-size-matters";
import { InputProps } from "./input.types";

const Input: FC<InputProps> = ({
  textValue,
  editable,
  onPressIn,
  placeholder,
  onChangeText,
  color,
}) => {
  return (
    <TextInput
      editable={editable}
      value={textValue}
      style={[styles.input, { color: color }]}
      onPressIn={onPressIn}
      placeholderTextColor={color}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    paddingLeft: scale(12),
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#C3C3C3",
  },
});
