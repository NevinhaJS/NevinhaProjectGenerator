import React from "react";
import { Header } from "react-navigation";
import { View } from "react-native";

import MainHeader from "./MainHeader";

const StackedHeader = ({backgroundColor, mainNavigation: {color}, ...otherProps}) => {
  return (
    <View
      style={{
        height: 56,
        justfyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: backgroundColor
      }}
    >
      <MainHeader textColor={color} backgroundColor="transparent"  />
      
      <Header {...otherProps} />
    </View>
  );
};

export default StackedHeader;