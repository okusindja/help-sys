import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from "./src/routes/bottom-tabs";
import { ThemeProvider } from "styled-components";
import { navigationTheme, theme } from "./src/design-system/theme";
import { PaperProvider } from "react-native-paper";
import useAuth from "./src/hooks/use-auth";
import LoginStack from "./src/routes/login";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const { user, token } = useAuth();
  console.log(user, token);
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={navigationTheme}>
        <NavigationContainer>
          {user && token ? <BottomTabs /> : <LoginStack />}
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;