import React from "react";
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
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export const Navbar = ({ title }) => {
  return (
    <>
      <View
        style={[
          t.wFull,
          t.textCenter,
          t.p4,
          t.pT16,
          t.flex,
          t.flexRow,
          t.itemsCenter,
          t.justifyBetween,
          t.bgBlack,
          t.textWhite
        ]}
      >
          {/* <FontAwesomeIcon icon="coffee" /> */}
        <Text style={[ t.textWhite ]}>{title}</Text>
        <Text style={[ t.textWhite ]}>bars</Text>
      </View>
    </>
  );
};
