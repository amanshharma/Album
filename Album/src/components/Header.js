import React from "react";
import { Text, View } from "react-native";

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    height: 60,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevaton: 5,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
