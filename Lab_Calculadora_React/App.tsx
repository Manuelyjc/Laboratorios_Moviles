import { StatusBar, Text, View } from "react-native";
import { CalculatorScreen } from "../Lab_Calculadora_React/src/screens/CalculatorScreen";
import { styles } from "../Lab_Calculadora_React/src/config/theme/app-theme";

function App() {
  return(
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
        
      <CalculatorScreen/>
      
    </View>
  );
};


export default App;