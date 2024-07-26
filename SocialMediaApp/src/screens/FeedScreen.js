// App.js
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Feed from '../components/Feed';
import {setFeeds} from '../redux/action/actions';
import {mockFeeds} from '../utils/mockData';


const FeedScreen = () => {
  const dispatch = useDispatch();
  const feeds = useSelector(state => state.feed.feeds);

  useEffect(() => {
    dispatch(setFeeds(mockFeeds));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {feeds.map((feed, index) => (
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
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default FeedScreen;
