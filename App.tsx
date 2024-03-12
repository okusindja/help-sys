import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from "./src/routes/bottom-tabs";
import { ThemeProvider } from "styled-components";
import { navigationTheme, theme } from "./src/design-system/theme";
import { PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={navigationTheme}>
        <BottomTabs />
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;