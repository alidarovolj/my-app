import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
} from "react-native";
import { t } from "react-native-tailwindcss";
import { Navbar } from "./components/Navbar"

export default function App() {
  const [counter, setText] = useState(0);
  const [text, anotherText] = useState("Change Me");
  const [marg, changeMarg] = useState(0);
  var [inputText, changeInput] = useState("Hello");
  function counterInc() {
    setText(counter + 1);
  }
  function changeText() {
    anotherText("Измененный текст");
    changeMarg(20);
  }
  function onChangeInput() {
    changeInput(event.target.value);
  }
  return (
    <>
      <Navbar title="Navbar title"/>
      <View style={styles.container}>
        <Text style={[t.bgBlack, t.textWhite]}>ansmd,anm,das!</Text>
        <Image source={require("./assets/favicon.png")} />
        <Image
          source={{
            uri: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
          }}
          style={[t.w10, t.h10]}
        />
        <View style={[t.flex, t.flexRow, t.itemsCenter, t.mY10]}>
          <Text>First </Text>
          <Text>Second</Text>
          <Button
            title="Click me"
            onPress={() => Alert.alert("Кнопка нажата")}
          />
        </View>
        <View>
          <Button onPress={counterInc} title="Counter" />
          <Text style={{ margin: marg }}>{counter}</Text>
          <Text onPress={changeText}>{text}</Text>
        </View>
        <TextInput onChange={onChangeInput} value={inputText} />
        <Text>{inputText}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
});
