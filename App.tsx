import {useColorScheme, View,Text } from 'react-native';
import First from './components/First.tsx'
import Buttons from './components/Buttons.tsx';
function App() {

  return (
   <View>
    <Text>Components</Text>
    <First/>
    <Buttons/>
   </View>
  );
}


export default App;
