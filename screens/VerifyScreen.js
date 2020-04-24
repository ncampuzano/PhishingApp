import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class VerifyScreen extends React.Component {
  state = {
    firstQuery: '',
  }
  render() {
    const { firstQuery } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 24 }}>Paste the URL below!</Text>
          </View>
          <View style={styles.searchContainer}>
            
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
  contentContainer: {
    paddingTop: 30,
  },
  infoContainer: {
    marginVertical: 100
  },
  titleContainer: {
    alignItems:'center'
  },
  searchContainer: {
    marginTop: 50
  }
});

export default VerifyScreen;