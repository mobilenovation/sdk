import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, View } from 'react-native';
import axios from 'axios';
import VideoPlayer from 'react-native-video-player';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

const SDK = () => {
  const [video, setVideo] = useState<any>();
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
      <VideoPlayer
        video={{
          uri: video?.videoUrl,
        }}
        loop
        autoplay
        showDuration
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{ uri: video.thumbnailUrl }}
      />
    </View>
  );
};

export default SDK;
