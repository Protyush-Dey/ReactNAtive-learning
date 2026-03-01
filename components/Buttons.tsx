import { Alert, Button, View } from "react-native"

const Buttons = () => {
const buttonp = () => {
  Alert.alert("hi")
}
  return (
    <View>
    <Button onPress={()=>buttonp()} title="hi"/>
    </View>
  )
}

export default Buttons