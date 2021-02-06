import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Video({ route, navigation }) {
  const { videoID } = route.params;

  //TODO: Ask Brian if he wants the videos to auto play or not 
  const [playing, setPlaying] = useState(true);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoID}
      />
    </View>
  );
}