import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

class VerifyScreen extends React.Component {
  state = {
    firstQuery: '',
  };
  updateSearch = search => {
    this.setState({ firstQuery: search});
  };
  render() {
    const { firstQuery } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 24 }}>Paste the URL below!</Text>
          </View>
          <View style={styles.searchContainer}>
            <SearchBar 
              placeholder="Paste your URL"
              onChangeText={this.updateSearch}
              value={firstQuery}
              lightTheme
              containerStyle={{ backgroundColor: '#fff', borderStyle: 'dashed' }}
            />
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
    marginVertical: 60
  },
  titleContainer: {
    alignItems:'center'
  },
  searchContainer: {
    marginTop: 30
  }
});

export default VerifyScreen;