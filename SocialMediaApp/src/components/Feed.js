// components/Feed.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ActionButtons from './ActionButtons';

const Feed = ({
  name,
  email,
  follow,
  description,
  profilePic,
  hideFollowButton,
}) => {
  const handleLike = () => {
    Alert.alert('Like button pressed');
  };

  const handleComment = () => {
    Alert.alert('Comment button pressed');
  };

  const handleShare = () => {
    Alert.alert('Share button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.profileView}>
          <Image source={{uri: profilePic}} style={styles.profilePic} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <View style={styles.buttonView}>
          {!hideFollowButton && (
            <TouchableOpacity
              onPress={() => Alert.alert('Work in progress')}
              style={styles.followButton}>
              <Text style={styles.followButtonText}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={{height: 50}}>
        <ActionButtons
          onLike={handleLike}
          onComment={handleComment}
          onShare={handleShare}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderBottomWidth: 8,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
    maxHeight: 300,
  },
  subContainer: {
    height: 70,
    width: '100%',
    backgroundColor: '#F5F2F2',
    flexDirection: 'row',
    borderRadius: 5,
  },
  profileView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameView: {
    flex: 3,
    justifyContent: 'center',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#555',
  },
  followButton: {
    width: 65,
    marginVertical: 8,
    paddingVertical: 4,
    backgroundColor: 'orange',
    borderRadius: 4,
  },
  followButtonText: {
    color: '#D20103',
    textAlign: 'center',
  },
  description: {
    marginVertical: 20,
    fontSize: 14,
    color: '#333',
  },
});

export default Feed;
