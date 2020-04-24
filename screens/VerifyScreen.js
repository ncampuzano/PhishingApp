import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar, Button } from 'react-native-elements';

import { GetURLInformation } from '../functions/PhishTankAPI';

class VerifyScreen extends React.Component {
  state = {
    query: '',
    result: null,
    isLoading: false,
  }; 
  searchURL = async () => {
    this.setState({ isLoading: true });
    const response = await GetURLInformation(this.state.query);
    console.log(response);
    this.setState({ result: response, isLoading: false });
  }
  updateSearch = (search) => {
    this.setState({ query: search });
  };
  render() {
    const { query } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 24 }}>Paste the URL below!</Text>
          </View>
          <View style={styles.searchContainer}>
            <SearchBar 
              placeholder='Paste your URL'
              onChangeText={this.updateSearch}
              value={query}
              lightTheme
              containerStyle={{ backgroundColor: '#fff', borderStyle: 'dashed' }}
            />
            <Button 
              title='Search'
              type='outline'
              onPress={() => this.searchURL()}
              loading={this.state.isLoading}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text>{JSON.stringify(this.state.result) }</Text>
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