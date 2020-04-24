import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class VerifyScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <Text>Hello!</Text>
        </View>
      </ScrollView>
    )
  };
}

VerifyScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default VerifyScreen;