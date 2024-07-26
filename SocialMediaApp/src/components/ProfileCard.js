import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileCard = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={{uri: user.Profile}} style={styles.image} />
          <View style={{justifyContent: 'space-around', marginLeft: 15}}>
            <View>
              <Text style={styles.detailsHeading}>Sex</Text>
              <Text style={styles.details}>{user.sex}</Text>
            </View>
            <View>
              <Text style={styles.detailsHeading}>Gender:</Text>
              <Text style={styles.details}>{user.gender}</Text>
            </View>
            <View>
              <Text style={styles.detailsHeading}>Zodiac Sign:</Text>
              <Text style={styles.details}>{user.zodiacSign}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.name}>
          {user.prefix} {user.fullName} {user.suffix}
        </Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <View style={{flex: 1, width: '100%', backgroundColor: 'white'}}>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
  },
  subContainer: {
    maxHeight: 300,
    width: '100%',
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bio: {
    fontSize: 16,
    color: 'gray',
  },
  details: {
    fontSize: 17,
    color: 'black',
  },
  detailsHeading: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
});

export default ProfileCard;
