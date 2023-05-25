import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, View } from 'react-native';
import axios from 'axios';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

const SDK = () => {
  const [video, setVideo] = useState<any>();
  const videoRef = useRef();
  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json'
      )
      .then((response) => {
        // handle success
        setVideo(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  if (!video) {
    return (
      <View>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <View>
      <Text>{'hello'}</Text>
      <Video
        source={{ uri: video?.videoUrl }} // Can be a URL or a local file.
        ref={videoRef} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </View>
  );
};

export default SDK;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
