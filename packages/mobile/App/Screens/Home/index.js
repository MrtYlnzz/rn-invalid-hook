import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'shared/Components/Button';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Button onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
