import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'shared/Components/Button';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>
      <Button onPress={() => navigation.navigate('Home')} />
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

export default Profile;
