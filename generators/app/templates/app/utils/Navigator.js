import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import Simple from '../screens/Simple';
import Header from '../components/StackedHeader';

//TODO create a reduce on the children in order to increase the navigator items
const createNavigator = (createNavigatorFn, {key, screen, settings}, navigationOptions = {}, defaultOptions = {}) => 
    createNavigatorFn({
        [key]: {
            screen: Simple,
            params: {
                settings: {
                    ...settings,
                    screen
                }
            },
            navigationOptions
        }
    },
    defaultOptions
);

const getStackedNavigationOptions = ({
    mainNavigation, statusBar: {backgroundColor, textColor, title}
}) => ({
    header:  props => <Header 
        mainNavigation={mainNavigation} 
        backgroundColor={backgroundColor} 
        {...props}
    />,
    headerStyle: {
        width: 400,
        backgroundColor: 'transparent'
    },
    title,
    headerTitleStyle: {
        fontWeight: "bold",
        color: textColor
    }
})

const getTabNavigationOptions = ({
    tabBar: { activeTintColor, inactiveTintColor, size, showLabel, backgroundColor}
}) => ({
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => 
            <Icon size={size} color={tintColor} name="accessibility" />
    }),
    tabBarOptions: {
        activeTintColor,
        inactiveTintColor,
        showLabel,
        style: {
            backgroundColor
        }
    }
});

const getPageScreen = (page, key) => page.screen == 'stacked' 
    ? createNavigator(
        createStackNavigator,
        { ...page, key },
        getStackedNavigationOptions(page.settings)
    )
    : createNavigator(
        createBottomTabNavigator, 
        { ...page, key }, 
        {}, 
        getTabNavigationOptions(page.settings)
    );

export {
    createNavigator,
    getPageScreen
};