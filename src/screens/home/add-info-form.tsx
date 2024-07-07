import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { pickerOptions } from '../../constants/data-analise-answers';
import DadosFinanceiros from './modals/dados-financeiros';
import DadosPsicologicos from './modals/dados-psicologicos';
import DadosSociais from './modals/dados-sociais';

const AddInfoForm = () => {
  const [step1Data, setStep1Data] = useState({ name: '', address: '' });
  const [step2Data, setStep2Data] = useState({ email: '', username: '' });
  const [step3Data, setStep3Data] = useState({ password: '', retypePassword: '' });

  return (
    <View style={styles.container}>
      <ProgressSteps progressBarColor="#FDC326" activeStepIconBorderColor="#FDC326" completedProgressBarColor="#FDC326" completedStepIconColor="#FDC326" labelColor="#FDC326" activeLabelColor="#FDC326">
        <ProgressStep label="Psicológicos">
          <View style={styles.stepContent}>
            <DadosPsicologicos pickerOptions={pickerOptions} />
          </View>
        </ProgressStep>
        <ProgressStep label="Económicos">
          <View style={styles.stepContent}>
            <DadosFinanceiros pickerOptions={pickerOptions} />
          </View>
        </ProgressStep>
        <ProgressStep label="Sociais" onSubmit={()=> alert("Submetido")}>
          <View style={styles.stepContent}>
            <DadosSociais pickerOptions={pickerOptions} />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label:{
    fontSize:16,
    marginHorizontal:5,
    marginTop:10

  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop:10
  },
});

export default AddInfoForm;
