import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class VerifyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topContainer}>
            <View style={styles.titleContainer}>
              <Text>Hi!</Text>
            </View>
            <View style={styles.searchContainer}>
              <Text>Hi!</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text>Hi!</Text>
          </View>
        </ScrollView>
      </View>      
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
  topContainer: {
    flex: 2,
  },
  infoContainer: {
    flex: 3,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 1,
  }
});

export default VerifyScreen;