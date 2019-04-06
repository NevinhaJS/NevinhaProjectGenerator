import React, { Component } from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Platform,
} from 'react-native';

import MainHeader from '../components/MainHeader';

export default class Simple extends Component {

    render() {
        const isAndroid = Platform.OS === 'android';
        const {navigation} = this.props;
        const {
            nextScreen, 
            statusBarColor, 
            textColor,
            screen,
            pageName,
        } = navigation.getParam('settings');

        const mainNavigation = {
          backgroundColor: '#6a51ae',
          textColor: '#fff'
        }

        return (
            <SafeAreaView style={{flex: 1}}>
              {screen == 'tab' && (<MainHeader {...mainNavigation} />)}

              <View style={[styles.container, { backgroundColor: statusBarColor }]}>
                <Text style={{ color: textColor, fontSize: 20, margin: 10, textAlign: 'center' }}>
                    {pageName}
                </Text>

                <Button
                    title="Descobrir"
                    onPress={() => navigation.navigate(nextScreen)}
                    color={isAndroid ? "blue" : "#fff"}
                />
              </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});