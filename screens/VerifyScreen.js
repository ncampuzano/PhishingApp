import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar, Button, Text, Badge, Tooltip} from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';

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
  openBrowser = () => {
    WebBrowser.
      openBrowserAsync(this.state.result.phish_detail_page);
  }
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
            { this.state.result != null &&
              <View>
                <View style={styles.textContainer}>
                  <Text style={styles.subtitle}>URL: </Text>
                  <Text>{this.state.result.url}</Text>
                </View>
                <View style={styles.textContainer}>
                  {(this.state.result.in_database && 
                    <Badge status='success' value=' '/>) ||
                    <Badge status='error' value=' '/>
                  }
                  <Tooltip popover={
                    <Text>Green means in the database and Red it does not.</Text>
                  }>
                    <Text style={styles.subtitle}>  In Database</Text>
                  </Tooltip>
                  
                </View>
                { this.state.result.in_database && 
                  <View>
                    <View style={styles.textContainer}>
                      {(this.state.result.verified && 
                        <Badge status='error' value=' '/>) ||
                        <Badge status='primary' value=' '/>
                      }
                      <Tooltip popover={
                        <Text>Red means is phishing and Blue it is not.</Text>
                      }>
                        <Text style={styles.subtitle}>  Verified</Text>
                      </Tooltip>
                    </View>
                    { this.state.result.verified &&
                      <View style={styles.textContainer}>
                        <Text style={styles.subtitle}>Verified at: </Text>
                        <Text>{this.state.result.verified_at}</Text>
                      </View>
                    }
                    <Button 
                      title='Open in browser'
                      onPress={() => this.openBrowser()}
                    />
                  </View>
                }
              </View>
            }
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
  },
  subtitle: {
    fontSize: 17,
  },
  textContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default VerifyScreen;