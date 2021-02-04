import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Video({ route, navigation }) {
  const { videoID } = route.params;

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoID}
        onChangeState={onStateChange}
      />
    </View>
  );
}