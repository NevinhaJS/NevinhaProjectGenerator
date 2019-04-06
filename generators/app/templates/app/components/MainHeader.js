import React from "react";
import { View } from "react-native";
import { Icon } from 'react-native-elements';

const Header = ({backgroundColor, textColor}) => (
    <View 
        style={{
            paddingLeft: 10,
            height: 56,
            alignItems: 'center',
            justfyContent: 'center',
            flexDirection: 'row',
            backgroundColor,
        }}
    >
        <Icon color={textColor} name="menu" />
    </View>
);

export default Header;