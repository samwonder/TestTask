import React, {useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import {mockUserProfile} from '../utils/mockData';
import Feed from '../components/Feed';
import {setProfileFeeds} from '../redux/action/actions';
import {mockProfileFeeds} from '../utils/mockData';
import {useDispatch, useSelector} from 'react-redux';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const profileFeeds = useSelector(state => state.feed.profileFeeds);
  console.log('profileFeeds: ', profileFeeds);

  useEffect(() => {
    dispatch(setProfileFeeds(mockProfileFeeds));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileCard user={mockUserProfile} />
        {profileFeeds.map((feed, index) => (
          <Feed
            key={index}
            name={feed.name}
            email={feed.email}
            follow={feed.follow}
            description={feed.description}
            profilePic={feed.profilePic}
            hideFollowButton={feed.hideFollowButton}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ProfileScreen;
