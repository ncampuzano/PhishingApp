import * as React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class ReportScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Text>Feature in development!</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default ReportScreen;